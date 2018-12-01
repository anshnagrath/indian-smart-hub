import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persoal',
  templateUrl: './persoal.component.html',
  styleUrls: ['./persoal.component.css']
})
export class PersoalComponent implements OnInit {
  public Mobile;
  constructor() {
    this.Mobile = JSON.parse(localStorage.getItem('isMobile'));
  }

  ngOnInit() {
  }

}
