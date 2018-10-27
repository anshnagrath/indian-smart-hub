import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular2-social-login';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public sub;
  constructor(public _auth: AuthService) { }

  ngOnInit() {
  }
  facebookLogin() {
    this.sub = this._auth.login('facebook').subscribe((data) => { alert(JSON.stringify(data)) });
  }
}
