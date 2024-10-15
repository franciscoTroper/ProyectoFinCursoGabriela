import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes
    , withComponentInputBinding()
    , withDebugTracing())
    ,provideHttpClient(withFetch())
  ]
};
