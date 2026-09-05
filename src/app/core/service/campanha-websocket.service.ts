import { Injectable, OnDestroy } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CampanhaRealtimeEventDTO } from '../models/dtos/campanha-dto';

@Injectable({
  providedIn: 'root'
})
export class CampanhaWebsocketService implements OnDestroy {
  private client: Client | null = null;
  private eventsSubject = new Subject<CampanhaRealtimeEventDTO>();
  private activeCampaignId: number | null = null;

  public connect(campanhaId: number): Observable<CampanhaRealtimeEventDTO> {
    if (this.activeCampaignId === campanhaId && this.client?.active) {
      return this.eventsSubject.asObservable();
    }

    this.disconnect();

    const token = localStorage.getItem('token');
    if (!token) {
      return this.eventsSubject.asObservable();
    }

    const socketUrl = `${environment.apiUrl.replace(/\/$/, '')}/ws`;

    this.client = new Client({
      reconnectDelay: 5000,
      connectHeaders: {
        Authorization: `Bearer ${token}`
      },
      webSocketFactory: () => new SockJS(socketUrl),
      debug: () => {}
    });

    this.client.onConnect = () => {
      this.activeCampaignId = campanhaId;
      this.client?.subscribe(`/topic/campanha/${campanhaId}`, (message: IMessage) => {
        try {
          const event = JSON.parse(message.body) as CampanhaRealtimeEventDTO;
          this.eventsSubject.next(event);
        } catch {
          // Ignore malformed payloads to avoid breaking realtime updates.
        }
      });
    };

    this.client.onStompError = () => {};

    this.client.activate();
    return this.eventsSubject.asObservable();
  }

  public disconnect() {
    this.activeCampaignId = null;
    if (this.client) {
      this.client.deactivate();
      this.client = null;
    }
  }

  ngOnDestroy(): void {
    this.disconnect();
    this.eventsSubject.complete();
  }
}
