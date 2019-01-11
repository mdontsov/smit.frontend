import { Injectable } from '@angular/core';

const TOKEN = 'Token';
const USERNAME = 'Username';
const PASSWORD = 'Password';
const FULLNAME = 'Fullname';
const PHONE = 'Phone';
const AUTHORITIES = 'Authorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private roles: Array<string> = [];
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN);
    window.sessionStorage.setItem(TOKEN, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME);
    window.sessionStorage.setItem(USERNAME, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME);
  }

  public savePassword(password: string) {
    window.sessionStorage.removeItem(PASSWORD);
    window.sessionStorage.setItem(PASSWORD, password);
  }

  public getPassword(): string {
    return sessionStorage.getItem(PASSWORD);
  }

  public saveFullname(fullname: string) {
    window.sessionStorage.removeItem(FULLNAME);
    window.sessionStorage.setItem(FULLNAME, fullname);
  }

  public getFullname(): string {
    return sessionStorage.getItem(FULLNAME);
  }

  public savePhone(phone: string) {
    window.sessionStorage.removeItem(PHONE);
    window.sessionStorage.setItem(PHONE, phone);
  }

  public getPhone(): string {
    return sessionStorage.getItem(PHONE);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES);
    window.sessionStorage.setItem(AUTHORITIES, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }
}
