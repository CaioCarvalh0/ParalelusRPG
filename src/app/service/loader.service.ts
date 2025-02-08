import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private requestsCount = signal(0);
  loading = computed(() => this.requestsCount() > 0);
  
  constructor() { }

  start(){
    this.requestsCount.update(n => n + 1);
  }

  stop(){
    this.requestsCount.update(n => n - 1);
  }

}
