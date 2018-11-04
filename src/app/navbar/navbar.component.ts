import { Component, HostListener, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public toScroll = false; toRegister = false; Documentation = false; complaince = false; brandingSols = false;
  public toflip = false; tax = false; personalService = false; creativeGall = false; digital = false; logins = false;
  public forFinalcial = false; port = false; creativeClose = false;
  public GST = false; smarthubsec = false;
  public isMobile = false;
  so = false;

  collapsed = false;
  constructor(@Inject(DOCUMENT) private document: any) {
    console.log(this.collapsed, 'looosdsdsdsd')
  }

  ngOnInit() {
    (455 < window.innerWidth && window.innerWidth < 991) ? this.isMobile = true : this.isMobile = false;
    console.log(window.innerWidth, this.isMobile, 'asasaas');
  }
  toggleCollapsed() {
    this.so = true;
    this.collapsed = !this.collapsed;
    console.log(this.collapsed, 'looosdsdsdsd')

  }
  redirect() {

    this.document.location.href = 'https://gmail.com';
  }
  closeServe() {

    this.toScroll = false;

  }

  serveOpen() {
    console.log('over1');
    this.creativeGall = false;
    this.toScroll = true;
    this.forFinalcial = false;

  }
  galOpen() {

    console.log('over2');
    this.toflip = false;
    this.logins = false;
    this.forFinalcial = false;
    this.toScroll = false;
    this.creativeGall = true;
  }
  galClose() {
    this.creativeGall = false;

  }
  openflux() {
    this.toflip = false;
    this.logins = false;
    this.forFinalcial = true;
    this.toScroll = false;
    this.creativeGall = false;
  }
  closeflux() {
    this.forFinalcial = false;
  }
  openedu() {
    this.toflip = true;
    this.logins = false;
    this.toScroll = false;
    this.creativeGall = false;
    this.forFinalcial = false;
  }
  closeedu() {
    this.toflip = false;

  }
  openlogin() {
    this.logins = true;
    this.toflip = false;
    this.toScroll = false;
    this.creativeGall = false;
    this.forFinalcial = false;
  }
  closelogin() {
    this.logins = false;

  }
}
