import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyBqosWzR04xGfoFgaj9IDNLqMAVNEkhI98',
        authDomain: 'clasetecnologias.firebaseapp.com',
        projectId: 'clasetecnologias',
        storageBucket: 'clasetecnologias.firebasestorage.app',
        messagingSenderId: '660994001460',
        appId: '1:660994001460:web:b49b243287008fbb6c5861',
        measurementId: 'G-WJLV1WPG0D',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
