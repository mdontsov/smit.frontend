import { Component, OnInit } from '@angular/core';
import { SigninInfo } from '../authorization/signin-info';
import { AuthorizationService } from '../authorization/authorization.service';
import { TokenService } from '../authorization/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private signinInfo: SigninInfo;

  constructor(private authorizationService: AuthorizationService, private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.signinInfo = new SigninInfo(
      this.form.username,
      this.form.password);

    this.authorizationService.signinAttempt(this.signinInfo).subscribe(
      data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUsername(data.username);
        this.tokenService.savePassword(data.password);
        this.tokenService.saveFullname(data.fullname);
        this.tokenService.savePhone(data.phone);
        this.tokenService.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
