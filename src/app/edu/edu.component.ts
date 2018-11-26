import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  public Mobile;
  constructor() {
    this.Mobile = JSON.parse(localStorage.getItem('isMobile'));
  }

  ngOnInit() {
  }

}
