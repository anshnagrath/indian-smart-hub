
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName; password;
  constructor(public service: AppService) { }

  ngOnInit() {
  }
  login() {

    this.service.login(this.userName, this.password).subscribe(data =>
      console.log(data, 'dekho ')
    );
  }
}
