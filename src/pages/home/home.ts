
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Shelter } from '../home/Models';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';
import { MarkerTypeId, IMapOptions } from 'angular-maps';
import { Shelter1Page } from '../shelter1list/shelter1list';
import { DonatePage } from '../donate/donate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  posts: any;
  lat1: number = -33.9249;
  lng1: number = 18.4241;

  public shelters: Array<Shelter> = [];
  userLocation= { lat:0, lng: 0 };

  constructor(public navCtrl: NavController, public http: Http) {

    navigator.geolocation.getCurrentPosition((position)=>
    this.userLocation = {
lat: position.coords.latitude,
lng: position.coords.longitude})
    
  

    var shelter1 = new Shelter();
    shelter1.image = " "
    shelter1.name = "The Haven Night Shelter";
    shelter1.address = "16 Piers Rd, Wynberg, Cape Town, 7800";
    shelter1.note = "Homeless shelter";
    shelter1.link = "https://www.haven.org.za/";
    shelter1.lat = -34.0069299
    shelter1.lng = 18.4658512
    shelter1.page = "navigateToShelter1Page"

    shelter1.items = [{ desc: "Blanket - 10 - $10.00 each", imageUrl: "https://thumbs.dreamstime.com/z/fleece-blanket-mint-green-roll-white-95195518.jpg" },]
  
    this.shelters.push(shelter1);

    var shelter2 = new Shelter();
    shelter2.image = " "
    shelter2.name = "St Anne's Home";
    shelter2.address = "48 Balfour St, Woodstock, Cape Town, 7915";
    shelter2.note = "Homeless shelter";
    shelter2.link = "http://www.stanneshomes.org.za/";
    shelter2.lat = -33.9346668
    shelter2.lng = 18.4492872
    shelter2.page = " navigateToShelter2Page"

    this.shelters.push(shelter2);

  }
  _markerTypeId = MarkerTypeId
  // a little trick so we can use enums in the template...

  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1
  };
  // for all available options for the various components, see IInfoWindowOptions, IInfoWindowAction, IMarkerOptions, IMapOptions, IMarkerIconInfo

  _click() {
    console.log("hello world...");
  }

  navigateToShelter1Page(shelter) {
    console.log("Navigating..");
    this.navCtrl.push(Shelter1Page, {
      "s": shelter
    });
  }

  navigateToDonate() {
    console.log("Navigating..");
    this.navCtrl.push(DonatePage)
  }
}
