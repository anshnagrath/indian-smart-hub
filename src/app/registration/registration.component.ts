import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public Mobile;
  constructor() {
    this.Mobile = JSON.parse(localStorage.getItem('isMobile'));
  }

  ngOnInit() {
  }

}
