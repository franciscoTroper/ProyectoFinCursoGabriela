import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
<<<<<<< HEAD
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes
    , withComponentInputBinding()
    , withDebugTracing())
    ,provideHttpClient(withFetch())
  ]
=======
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
              provideRouter(
                            routes,
                            withComponentInputBinding()
                          ),
              provideHttpClient(withFetch()) // no olvidar �ste para poder usar HttpClient
            ]
>>>>>>> 8d73054d3c9f37822f69a9ab8bc5f044e5431329
};
