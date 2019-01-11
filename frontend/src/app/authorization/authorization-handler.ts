import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenService } from './token.service';
const KEY = 'Authorization';

@Injectable()
export class AuthorizationHandler implements HttpInterceptor {

    constructor(private token: TokenService) { }

    intercept(request: HttpRequest<any>, handler: HttpHandler) {

        let authorizationRequest = request;
        const token = this.token.getToken();
        if (token != null) {
            authorizationRequest = request.clone({ headers: request.headers.set(KEY, 'Bearer ' + token) });
        }
        return handler.handle(authorizationRequest);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationHandler, multi: true }
];
