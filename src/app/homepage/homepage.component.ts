import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  public toScroll = false; toRegister = false; Documentation = false;
  public toflip = false; tax = false; personalService = false;
  public forFinalcial = false;
  public GST = false;

  constructor() { }
  forSmartHub() {
    this.toScroll = !this.toScroll;
  }
  flip() {
    this.toflip = !this.toflip;
  }
  finalcialFlux() {
    this.forFinalcial = !this.forFinalcial;

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
}
