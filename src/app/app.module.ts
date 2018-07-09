import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef, MapServiceFactory, BingMapServiceFactory } from "angular-maps";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    MapModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
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