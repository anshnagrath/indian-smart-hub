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
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {
    AuthServiceConfig,
    SocialLoginModule,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from 'angular-6-social-login';
import { NavbarComponent } from './navbar/navbar.component';

export function getAuthServiceConfigs() {
    const config = new AuthServiceConfig(
        [
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider('1375514229250365')
            },
            {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider('334880204938-ofvpvtl1dcro61dfpenpeihduera23bl.apps.googleusercontent.com')
            }
        ]);
    return config;
}
@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        LoginComponent,
        SignupComponent,
        NavbarComponent
    ],
    imports: [
        HttpClientModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        SocialLoginModule,
        BrowserAnimationsModule,
        ClickOutsideModule,
        RouterModule.forRoot([
            { path: '', component: HomepageComponent, pathMatch: 'full' },
            { path: 'login', component: LoginComponent, pathMatch: 'full' },
            { path: 'signup', component: SignupComponent, pathMatch: 'full' }
        ]),
        SliderModule
    ],
    providers: [{
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
    },
        AppService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

