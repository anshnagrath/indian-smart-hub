import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  public Mobile;
  constructor() {
    this.Mobile = JSON.parse(localStorage.getItem('isMobile'));
  }

  ngOnInit() {
  }

}
