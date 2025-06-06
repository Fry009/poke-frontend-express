import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // ✅ Arreglado
    provideHttpClient(),                                   // ✅ HttpClient
    provideRouter(routes),                                 // ✅ Rutas
    provideClientHydration(withEventReplay())              // ✅ Hydration SSR (opcional si usas SSR)
  ]
};
