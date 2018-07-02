import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Shelter } from '../home/Models'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public shelters: Array<Shelter> = [];

  constructor(public navCtrl: NavController) {

    var shelter1 = new Shelter();
    shelter1.image = "shelter pic"
    shelter1.name = "shelter name";
    shelter1.address = "shelter address";
    shelter1.note = "shelter description";
    shelter1.link = "#";
    this.shelters.push(shelter1);

  }

}
