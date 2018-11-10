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
  public forFinalcial = false; port = false; creativeClose = false;
  public GST = false; smarthubsec = false;
  public Name; lastName; mail; phone; chatboxShow = false;

  myFullresImage = 'https://www.file-upload.com/1qr3giyt7l1r';
  public imagesUrl;
  ngOnInit() {
    this.imagesUrl = [
      'https://www.file-upload.com/1qr3giyt7l1r',
      'https://www.file-upload.com/tf1sxasmakll',
      'https://www.file-upload.com/abjgx1nqrubw',
      'https://www.file-upload.com/dshoe34r4piy',
      'https://www.file-upload.com/d4tzslloi773',
      'https://www.file-upload.com/2vc1fhbv6iqa',
      'https://www.file-upload.com/ou1evwlhcqp9',
      'https://www.file-upload.com/q2ky6363ea35',
    ];
  }
  constructor(private _eref: ElementRef,@Inject(DOCUMENT) private document: any) {
  } 
  showChatbox() {
    console.log('clicked','sadcsadcasdcasdcasdc')
    this.chatboxShow =!this.chatboxShow;

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
  ondisplay(){
    console.log("ascdcasdcasdcsacsadcs")
  }
}
