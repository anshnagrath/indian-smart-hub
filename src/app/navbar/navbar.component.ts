import { Component, HostListener, OnChanges } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {
    public toScroll = false; cotact = false; Documentation = false; complaince = false; brandingSols = false;
    public toflip = false; tax = false; personalService = false; creativeGall = false; digital = false; logins = false;
    public forFinalcial = false; port = false; creativeClose = false;
    public GST = false; smarthubsec = false; togler = false; togleCreative = false;
    public isMobile = false; fluxToggler = false; eduTogglers = false;
    so = false;

    collapsed = true;
    constructor(@Inject(DOCUMENT) private document: any) {
        (300 < window.screen.width && window.screen.width < 991) ? this.isMobile = true : this.isMobile = false;

    }
    ngOnChanges() {
        (300 < window.screen.width && window.screen.width < 991) ? this.isMobile = true : this.isMobile = false;
    }

    toggleCollapsed() {
        this.so = !this.so;
        this.collapsed = !this.collapsed;
        console.log(this.collapsed, 'looosdsdsdsd')

    }
    redirect() {

        this.document.location.href = 'https://gmail.com';
    }
    redirecttoub() {
        this.document.location.href = 'https://indiansmarthub.in';
    }
    redirecttoEdu() {
        this.document.location.href = 'http://www.jagsun.in';
    }
    closeServe() {

        this.toScroll = false;

    }
    closectact() {
        this.cotact = false;
    }
    opentact() {
        this.logins = false;
        this.cotact = true;
        this.creativeGall = false;
        this.toScroll = false;
        this.forFinalcial = false;
    }
    financialTogler() {
        this.fluxToggler = !this.fluxToggler;
        this.togler = false;
        this.togleCreative = false;

        this.eduTogglers = false;
    }
    serveOpen() {
        this.cotact = false;
        console.log('over1');
        this.creativeGall = false;
        this.toScroll = true;
        this.forFinalcial = false;

    }
    edutogler() {
        this.eduTogglers = !this.eduTogglers;
        this.togler = false;
        this.togleCreative = false;
        this.fluxToggler = false;

    }
    creativetoggler() {
        this.togleCreative = !this.togleCreative;
        this.togler = false;
        this.fluxToggler = false;
        this.eduTogglers = false;
    }
    dropdown() {
        this.togler = !this.togler;
        this.togleCreative = false;
        this.fluxToggler = false;
        this.eduTogglers = false;
    }
    galOpen() {

        console.log('over2');
        this.cotact = false;
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
        this.cotact = false;
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
        this.cotact = false;
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
        this.cotact = false;
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
