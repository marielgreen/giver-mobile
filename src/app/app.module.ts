import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, ApplicationRef } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef, MapServiceFactory, BingMapServiceFactory } from "angular-maps";
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Shelter1Page } from '../pages/shelter1list/shelter1list';
import { UpdatePage } from '../pages/update/update';
import { DonatePage } from '../pages/donate/donate';
import { ForgotPasswordPage } from '../pages/forgotpassword/forgotpassword';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    Shelter1Page,
    UpdatePage,
    DonatePage,
    ForgotPasswordPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    MapModule.forRoot(),
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAOcIU3Glf45SIHCXfHS5fJTdtER214WJI'}) //googlemaps
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    Shelter1Page,
    UpdatePage,
    DonatePage,
    ForgotPasswordPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory}
  ]
})
export class AppModule {}

export function MapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey ="AqBGcbdM62R25R1aIk5BYDur1Y6Ywp2AdtN2w2QZZIONHhZaJh10cLT6hw9U2AQ-"; // your bing map key
  bc.branch = "experimental"; 
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}