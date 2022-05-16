import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { StorageProvider } from "./storage-provider";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  baseUrl = environment.apiUrl;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private storageProvider: StorageProvider
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let endpoint: any;

    if (req.url.match(/i18n/) !== null) {
      endpoint = { url: '' };
    } else {
      endpoint = { url: `${this.baseUrl}/${req.url}` };
    }
    const user = this.storageProvider.get('user');

    if (user && user.token) {
      endpoint.setHeaders = {
        Authorization: 'Bearer ' + user.token
      };
    }

    const apiRequest = req.clone(endpoint);

    return next.handle(apiRequest).pipe(
      tap(
        (event: any) => {
          // if (req.url.match(/login/) != null) {
          //   if (event.body && event.body.token) {
          //     this.storageProvider.set('user', event.body);
          //   }
          // }
          // if (req.url.match(/logout/) != null) {
          //   this.router.navigate(['login']);
          //   this.storageProvider.clear();
          // }
          return event;
        },
        error => {
          // if (error instanceof HttpErrorResponse && error.status === 401) {
          //   console.log('Unauthorized');
          //   this.ngZone.run(() => this.router.navigate(['login'])).then();
          //   this.storageProvider.clear();
          // }

          if (error instanceof HttpErrorResponse && [500, 501, 502, 503, 504].includes(error.status)) {
            console.log('Data server connection error');
          }
        }
      )
    );

  }
}
