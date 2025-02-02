import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private requestsCount = signal(0);
  loading = computed(() => this.requestsCount() > 0);
  

  constructor() { }

  start(){
    console.log('start')
    this.requestsCount.update(n => n + 1);
  }

  stop(){
    console.log('stop')
    this.requestsCount.update(n => n - 1);
  }

}
