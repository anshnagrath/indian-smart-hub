import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {ToasterService} from './../toaster.service';
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
    public message;

    myFullresImage = 'https://www.file-upload.com/1qr3giyt7l1r';
    public imagesUrl;
    constructor(private _eref: ElementRef, @Inject(DOCUMENT) private document: any, public service: AppService,public toastService: ToasterService) {
        (300 < window.screen.width && window.screen.width < 991) ? this.isMobile = true : this.isMobile = false;
        console.log(window.screen.width, this.isMobile, 'asasaas');
        localStorage.setItem('isMobile', JSON.stringify(this.isMobile));
    }
    ngOnInit() {
        setTimeout(() => {
            this.hideit = false;
        }, 7000);
    }

    showChatbox() {
        this.chatboxShow = !this.chatboxShow;

    }
    contactUs(para) {
        const obj = {};
        const email = this.service.sendEmail(para.value).then(data =>{
               console.log(data, 'logging email');
               '// this.toastService.success('We have recieved your query and we will get in touch with you shortly');
        });
     

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
    getStyle() {
        if (this.hideit === true) {
            return 'black';
        }
  
 
    }
}
