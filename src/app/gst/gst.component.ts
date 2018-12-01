import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit {

  constructor() {
    this.Mobile = JSON.parse(localStorage.getItem('isMobile'));
  }
  public Mobile;
  ngOnInit() {
  }

}
