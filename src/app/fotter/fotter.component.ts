import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }
  redirectToTwitter() {

    this.document.location.href = 'https://twitter.com/indiansmarthub';
  }
  redirectToFacebook() {

    this.document.location.href = 'https://www.facebook.com/Indian-Smart-Hub-748135222196160/?modal=admin_todo_tour';
  }
  redirectToInsta() {

    this.document.location.href = 'https://www.instagram.com/indiansmarthub/';
  }
}
