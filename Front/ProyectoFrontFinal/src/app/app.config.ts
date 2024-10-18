import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
              provideRouter(
                            routes,
                            withComponentInputBinding(),
//                            withDebugTracing()
                          ),
              provideHttpClient(withFetch()) // no olvidar �ste para poder usar HttpClient
            ]
};
