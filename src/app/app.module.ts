import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { MessagerService } from './messager.service'; // stole this

import { AppComponent } from './app.component';
import { CrystalComponent } from './crystal/crystal.component';
import { StoreTopComponent } from './store-top/store-top.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PurchaseComponent } from './purchase/purchase.component';
import { MarketComponent } from './market/market.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { XrystalComponent } from './xrystal/xrystal.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

@NgModule({
  declarations: [
    AppComponent,
    CrystalComponent,
    StoreTopComponent,
    PurchaseComponent,
    MarketComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    XrystalComponent,
    VisualizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [MessagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
