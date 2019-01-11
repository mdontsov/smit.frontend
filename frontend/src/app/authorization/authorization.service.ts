import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenResponse } from './token-response';
import { SigninInfo } from './signin-info';
import { SignupInfo } from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private signinUrl = 'http://localhost:8888/auth/signin';
  private signupUrl = 'http://localhost:8888/auth/signup';
  constructor(private httpClient: HttpClient) { }

  signinAttempt(credentials: SigninInfo): Observable<TokenResponse> {
    return this.httpClient.post<TokenResponse>(this.signinUrl, credentials, httpOptions);
  }

  signUp(data: SignupInfo): Observable<string> {
    return this.httpClient.post<string>(this.signupUrl, data, httpOptions);
  }
}
