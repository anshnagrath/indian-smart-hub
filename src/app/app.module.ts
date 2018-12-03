import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ClickOutsideModule } from 'ng4-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgxSpinnerModule } from 'ngx-spinner';
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
import { AppearDirective } from './appear.directive';
import { TicketingComponent } from './ticketing/ticketing.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { CreativeknowComponent } from './creativeknow/creativeknow.component';
import { FinancialknowmoreComponent } from './financialknowmore/financialknowmore.component';
import { EduKnowmoreComponent } from './edu-knowmore/edu-knowmore.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CarrierComponent } from './carrier/carrier.component';


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
        PortfolioComponent,
        AppearDirective,
        TicketingComponent,
        InsuranceComponent,
        KnowmoreComponent,
        CreativeknowComponent,
        FinancialknowmoreComponent,
        EduKnowmoreComponent,
        SpinnerComponent,
        CarrierComponent

    ],
    imports: [
        FormsModule,
        HttpClientModule,
        NgxSpinnerModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        SocialLoginModule,
        BrowserAnimationsModule,
        ClickOutsideModule,
        RouterModule.forRoot([
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
            { path: 'ticketing', component: TicketingComponent, pathMatch: 'full' },
            { path: 'insurance', component: InsuranceComponent, pathMatch: 'full' },
            { path: 'knowmore', component: KnowmoreComponent, pathMatch: 'full' },
            { path: 'creativemore', component: CreativeknowComponent, pathMatch: 'full' },
            { path: 'financialmore', component: FinancialknowmoreComponent, pathMatch: 'full' },
            { path: 'edumore', component: EduKnowmoreComponent, pathMatch: 'full' },
            { path: 'carrier', component: CarrierComponent, pathMatch: 'full' },
            
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

