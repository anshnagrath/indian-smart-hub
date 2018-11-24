import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public toScroll = false; toRegister = false; Documentation = false; complaince = false; brandingSols = false;
  public toflip = false; tax = false; personalService = false; creativeGall = false; digital = false; logins = false;
  public forFinalcial = false; port = false; creativeClose = false; isMobile = false;
  public serveClick = false; creativeClick = false; fiancialClick = false; eduClick = false;
  public Name; lastName; mail; phone; chatboxShow = false; afterLoader = false; hideit = true;

  myFullresImage = 'https://www.file-upload.com/1qr3giyt7l1r';
  public imagesUrl;
  constructor(private _eref: ElementRef, @Inject(DOCUMENT) private document: any, private spinner: NgxSpinnerService) {
    (300 < window.screen.width && window.screen.width < 991) ? this.isMobile = true : this.isMobile = false;
    console.log(window.screen.width, this.isMobile, 'asasaas');

  }
  ngOnInit() {
    setTimeout(() => {
      this.hideit = false;
    }, 7000);
  }

  showChatbox() {
    console.log('clicked', 'sadcsadcasdcasdcasdc')
    this.chatboxShow = !this.chatboxShow;

  }

  serveClicked() {
    this.serveClick = true;
    this.creativeClick = false;
    this.fiancialClick = false;
    this.eduClick = false;
  }
  creativeClicked() {
    console.log('in creative', this.serveClick, this.creativeClick, this.fiancialClick, this.eduClick);
    this.serveClick = false;
    this.creativeClick = true;
    this.fiancialClick = false;
    this.eduClick = false;
  }
  fiancialClicked() {
    this.fiancialClick = true;
    this.serveClick = false;
    this.creativeClick = false;
    this.eduClick = false;
  }
  eduClicked() {
    console.log("edu")
    this.eduClick = true;
    this.fiancialClick = false;
    this.serveClick = false;
    this.creativeClick = false;

  }
}
