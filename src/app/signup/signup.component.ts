import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public sub;
  public mail; password;
  constructor(private socialAuthService: AuthService, public service: AppService) { }

  ngOnInit() {
  }
  facebookLogin() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        alert(userData);

      }
    );
  }
  signup() {
    this.service.signup(this.mail, this.password).subscribe(data =>
      console.log(data, 'signup conntent')
    );
  }
  googleLogin() {
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        alert(userData);

      }
    );
  }
}
