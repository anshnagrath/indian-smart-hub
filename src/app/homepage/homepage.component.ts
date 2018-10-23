import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  public toScroll = false; toRegister = false; Documentation = false; complaince = false; brandingSols = false;
  public toflip = false; tax = false; personalService = false; creativeGall = false; digital = false; logins = false;
  public forFinalcial = false; port = false;
  public GST = false;


  constructor() { }
  forSmartHub() {
    this.toScroll = !this.toScroll;
  }
  flip() {
    this.toflip = !this.toflip;
    this.logins = false;
    this.creativeGall = false;
    this.forFinalcial = false;


  }
  finalcialFlux() {
    this.logins = false;
    this.forFinalcial = !this.forFinalcial;
    this.toflip = false;
    this.creativeGall = false;

  }
  registration() {
    this.forFinalcial = false;
    this.toRegister = !this.toRegister;

  }
  forGST() {
    this.forFinalcial = false;
    this.GST = !this.GST;

  }
  forDocumentation() {
    this.forFinalcial = false;
    this.Documentation = !this.Documentation;
  }
  forTax() {
    this.forFinalcial = false;
    this.tax = !this.tax;

  }
  personalservice() {
    this.forFinalcial = false;
    this.personalService = !this.personalService;

  }
  complainceandf() {
    this.forFinalcial = false;
    this.complaince = !this.complaince;
  }
  creativeGallery() {
    this.creativeGall = !this.creativeGall;
    this.logins = false;
    this.forFinalcial = false;
    this.toflip = false;
  }
  brandingSol() {
    this.creativeGall = false;
    this.brandingSols = !this.brandingSols;
  }
  digitalmarketing() {
    this.creativeGall = false;
    this.logins = false;
    this.digital = !this.digital;
  }
  portfoliomanagment() {
    this.creativeGall = false;
    this.logins = false;
    this.port = !this.port;
  }
  login() {
    this.logins = !this.logins;
    this.toflip = false;

  }
}
