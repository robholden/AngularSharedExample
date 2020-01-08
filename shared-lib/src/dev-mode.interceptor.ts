import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IEnvironment, INJECTOR_ENV } from '@lib/env.interface';

@Injectable({
    providedIn: 'root'
})
export class DevModeInterceptor implements HttpInterceptor {
    constructor(@Inject(INJECTOR_ENV) private env: IEnvironment) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Add dev header when not in production
        if (!this.env.production) {
            request = request.clone({ headers: request.headers.set('X-DEV', '1') });
        }

        // Send back event
        return next.handle(request);
    }
}
