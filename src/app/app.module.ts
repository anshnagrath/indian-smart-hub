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
import { RegistrationComponent } from './registration/registration.component';
import { GstComponent } from './gst/gst.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FotterComponent } from './fotter/fotter.component';
import { TaxComponent } from './tax/tax.component';
import { PersoalComponent } from './persoal/persoal.component';
import { FudingComponent } from './fuding/fuding.component';
import { EduComponent } from './edu/edu.component';
import { SmartComponent } from './smart/smart.component';
import { BrandingComponent } from './branding/branding.component';
import { DigitalComponent } from './digital/digital.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


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
        NavbarComponent,
        RegistrationComponent,
        GstComponent,
        DocumentationComponent,
        FotterComponent,
        TaxComponent,
        PersoalComponent,
        FudingComponent,
        EduComponent,
        SmartComponent,
        BrandingComponent,
        DigitalComponent,
        PortfolioComponent

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
            { path: 'login', component: LoginComponent, pathMatch: 'full' },
            { path: 'signup', component: SignupComponent, pathMatch: 'full' },
            { path: 'register', component: RegistrationComponent, pathMatch: 'full' },
            { path: 'gst', component: GstComponent, pathMatch: 'full' },
            { path: 'documentation', component: DocumentationComponent, pathMatch: 'full' },
            { path: 'tax', component: TaxComponent, pathMatch: 'full' },
            { path: 'personalservices', component: PersoalComponent, pathMatch: 'full' },
            { path: 'Funding', component: FudingComponent, pathMatch: 'full' },
            { path: 'edu', component: EduComponent, pathMatch: 'full' },
            { path: 'serve', component: SmartComponent, pathMatch: 'full' },
            { path: 'brand', component: BrandingComponent, pathMatch: 'full' },
             { path: 'digital', component: DigitalComponent, pathMatch: 'full' },
             { path: 'portfolio', component: PortfolioComponent, pathMatch: 'full' },
            { path: '', component: HomepageComponent, pathMatch: 'full' }
             
            
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

