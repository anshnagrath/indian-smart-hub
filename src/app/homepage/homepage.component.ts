import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  public toScroll = false; toRegister = false; Documentation = false; complaince = false; brandingSols = false;
  public toflip = false; tax = false; personalService = false; creativeGall = false; digital = false; logins = false;
  public forFinalcial = false; port = false; creativeClose = false;
  public GST = false; smarthubsec = false;


  constructor(private _eref: ElementRef) {
  }
  close() {
    // this.toScroll = true;

    if (this.smarthubsec !== true && this.creativeClose !== true) {
      this.toScroll = false;
      console.log('in');
      this.smarthubsec = true
      // this.scroll == false ? this.creativeGall = true : this.creativeGall = false;
      // console.log("in")
    }
    // if (this.smarthubsec == true && this.creativeClose !== true) {
    //   this.creativeGall = false;
    //   console.log('in2')

    // }
    // if (this.creativeClose == true) { this.creativeGall = false; }
    //  else console.log("outside ")
    // else {
    //   console.log(this.smarthubsec, 'scsdccccccccccccccccccccccC')

    // }
  }
  forSmartHub() {
    this.toScroll = !this.toScroll;
    this.logins = false;
    this.creativeGall = false;
    this.forFinalcial = false;
    this.toflip = false;

  }
  flip() {
    this.toflip = !this.toflip;
    this.logins = false;
    this.creativeGall = false;
    this.forFinalcial = false;
    this.toScroll = false;


  }
  finalcialFlux() {
    this.logins = false;
    this.forFinalcial = !this.forFinalcial;
    this.toflip = false;
    this.creativeGall = false;
    this.toScroll = false;


  }
  registration() {
    this.forFinalcial = false;
    this.GST = false;
    this.Documentation = false;
    this.tax = false;
    this.toRegister = !this.toRegister;
    this.personalService = false;
    this.complaince = false;

  }
  forGST() {
    this.forFinalcial = false;
    this.toRegister = false;
    this.Documentation = false;
    this.tax = false;
    this.GST = !this.GST;
    this.personalService = false;
    this.complaince = false;

  }
  forDocumentation() {
    this.complaince = false;
    this.GST = false;
    this.toRegister = false;
    this.toScroll = false;
    this.forFinalcial = false;
    this.tax = false;
    this.personalService = false;
    this.Documentation = !this.Documentation;
  }
  forTax() {
    // console.log(this.tax, 'asxassa')
    this.forFinalcial = false;
    this.Documentation = false;
    this.GST = false;
    this.toRegister = false;
    //this.tax = false ? this.tax = true : this.tax = false;
    this.tax = !this.tax;
    this.personalService = false;
    this.complaince = false;

  }
  personalservice() {
    this.forFinalcial = false;
    this.personalService = !this.personalService;
    this.forFinalcial = false;
    this.Documentation = false;
    this.tax = false;
    this.GST = false;
    this.toRegister = false;
    this.complaince = false;


  }
  complainceandf() {
    this.forFinalcial = false;
    this.forFinalcial = false;
    this.Documentation = false;
    this.GST = false;
    this.personalService = false;
    this.forFinalcial = false;
    this.toRegister = false;
    this.complaince = !this.complaince;
  }
  creativeGallery() {
    console.log('in3')
    this.creativeGall = !this.creativeGall;
    this.logins = false;
    this.forFinalcial = false;
    this.toScroll = false;
    this.toflip = false;
  }
  brandingSol() {
    this.creativeGall = false;
    this.digital = false;
    this.port = false;
    this.brandingSols = !this.brandingSols;
  }
  digitalmarketing() {
    this.creativeGall = false;
    this.brandingSols = false;
    this.logins = false;
    this.port = false;
    this.digital = !this.digital;
  }
  portfoliomanagment() {
    this.digital = false;
    this.creativeGall = false;
    this.logins = false;
    this.toScroll = false;
    this.toScroll = false;
    this.port = !this.port;
  }
  login() {
    this.logins = !this.logins;
    this.toflip = false;
    this.toScroll = false;
    this.forFinalcial = false;

  }
}
