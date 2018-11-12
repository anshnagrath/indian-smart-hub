import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public toScroll = false; toRegister = false; Documentation = false; complaince = false; brandingSols = false;
  public toflip = false; tax = false; personalService = false; creativeGall = false; digital = false; logins = false;
  public forFinalcial = false; port = false; creativeClose = false; isMobile = false;
  public GST = false; smarthubsec = false;
  public Name; lastName; mail; phone; chatboxShow = false;

  myFullresImage = 'https://www.file-upload.com/1qr3giyt7l1r';
  public imagesUrl;
  constructor(private _eref: ElementRef, @Inject(DOCUMENT) private document: any) {
  }
  ngOnInit() {
    (300 < window.screen.width && window.screen.width < 991) ? this.isMobile = true : this.isMobile = false;
    console.log(window.screen.width, this.isMobile, 'asasaas');

  }

  showChatbox() {
    console.log('clicked', 'sadcsadcasdcasdcasdc')
    this.chatboxShow = !this.chatboxShow;

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
  ondisplay() {
    console.log("ascdcasdcasdcsacsadcs")
  }
}
