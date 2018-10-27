import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ClickOutsideModule } from 'ng4-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import { Angular2SocialLoginModule } from 'angular2-social-login';
let socialloginproviders = {
    "google": {
        "clientId": ""
    },
    "facebook": {
        "clientId": "1375514229250365",
        "apiVersion": "v2.11"
    }
}
@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        Angular2SocialLoginModule,
        BrowserAnimationsModule,
        ClickOutsideModule,
        RouterModule.forRoot([
            { path: '', component: HomepageComponent, pathMatch: 'full' },
            { path: 'login', component: LoginComponent, pathMatch: 'full' },
            { path: 'signup', component: SignupComponent, pathMatch: 'full' }
        ]),
        SliderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(socialloginproviders);
