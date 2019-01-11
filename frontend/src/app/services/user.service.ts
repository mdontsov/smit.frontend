import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8888/test/user';
  private smitUrl = 'http://localhost:8888/test/smit';
  private adminUrl = 'http://localhost:8888/test/admin';
  private userDetailsUrl = 'http://localhost:8888/test/userDetails';

  constructor(private httpClient: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.httpClient.get(`${this.userUrl}`, { responseType: 'text' });
  }

  getSMITBoard(): Observable<string> {
    return this.httpClient.get(`${this.smitUrl}`, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.httpClient.get(`${this.adminUrl}`, { responseType: 'text' });
  }

  getHomeBoard(): Observable<any> {
    return this.httpClient.get(`${this.userDetailsUrl}`);
  }
}
