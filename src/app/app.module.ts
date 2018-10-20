import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomepageComponent, pathMatch: 'full' },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
