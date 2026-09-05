import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// SockJS/CommonJS dependencies may expect the Node-style global symbol.
(globalThis as typeof globalThis & { global?: typeof globalThis }).global = globalThis;

bootstrapApplication(AppComponent, appConfig).catch((err) => console.log(err));
