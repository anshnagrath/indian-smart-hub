import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomepageComponent, pathMatch: 'full' },
            { path: 'login', component: LoginComponent, pathMatch: 'full' },
            { path: 'signup', component: SignupComponent, pathMatch: 'full' }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
