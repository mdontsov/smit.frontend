import { Component, OnInit } from '@angular/core';
import { TokenService } from './authorization/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.roles = this.tokenService.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_SMIT') {
          this.authority = 'smit';
          return false;
        } else {
          this.authority = 'user';
          return true;
        }
      });
    }
  }
}
