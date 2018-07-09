
// <reference path="../../../node_modules/types/bingmaps/MicrosoftMaps/CustomMapStyles.d.ts" />
// <reference path="types/MicrosoftMaps/Microsoft.Maps.d.ts" />
// <reference path="types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Shelter } from '../home/Models'
import { Http } from '@angular/http'; //for intergrating 
import 'rxjs/add/operator/map';
import { MarkerTypeId, IMapOptions } from 'angular-maps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any;

  public shelters: Array<Shelter> = [];

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=[AqBGcbdM62R25R1aIk5BYDur1Y6Ywp2AdtN2w2QZZIONHhZaJh10cLT6hw9U2AQ-]').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children; // this is whats intergrated 
   
    });

    var shelter1 = new Shelter();
    shelter1.image = " "
    shelter1.name = "Roo's shelter";
    shelter1.address = "1 Shelter Ave, Cape Town";
    shelter1.note = "Homeless shelter";
    shelter1.link = "#";
    shelter1.lat = -33.9249
    shelter1.lng = 18.4241
    this.shelters.push(shelter1);

    var shelter2 = new Shelter();
    shelter2.image = " "
    shelter2.name = "Mariel's shelter";
    shelter2.address = " 22 Shelter Rd, Milnerton, Cape Town";
    shelter2.note = "Food Bank";
    shelter2.link = "#";
    shelter2.lat = -33.12
    shelter2.lng = 18.4241
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

        _click(){
           console.log("hello world...");
       }


}
