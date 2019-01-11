import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from '../authorization/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.info = {
      token: this.tokenService.getToken(),
      username: this.tokenService.getUsername(),
      password: this.tokenService.getPassword(),
      fullname: this.tokenService.getFullname(),
      phone: this.tokenService.getPhone(),
      authorities: this.tokenService.getAuthorities()
    };
  }

  logout() {
    this.tokenService.signOut();
    window.location.reload();
  }
}
