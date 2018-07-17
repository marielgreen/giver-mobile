import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Smodel } from '../shelter1list/smodel';

@Component({
    selector: 'page-shelter1list',
    templateUrl: 'shelter1list.html'
})

export class Shelter1Page {

    public smodel: Array<Smodel> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {


        var smodel1 = new Smodel();
        smodel1.item1 = "Toothbrush - 10 brushes - $1.50 each";
        smodel1.item2 = "Pillow - 15 pieces - $14.00 each";
        smodel1.item3 = "Pillow - 15 pieces - $14.00 each";
        smodel1.item4 = "Socks - 150 pairs - $7.00 for pack of 10";
        smodel1.item5 = "Laundry detergent - 25 boxes -  $7.50 each";
        smodel1.item6 = "";
        smodel1.item7 = "";
        smodel1.item8 = "";
        this.smodel.push(smodel1);

        var smodel2 = new Smodel();
        smodel2.item1 = "Toothbrush - 2 brushes - $1.50 each";
        smodel2.item2 = "";
        smodel2.item3 = "";
        smodel2.item4 = "";
        smodel2.item5 = "";
        smodel2.item6 = "";
        smodel2.item7 = "";
        smodel2.item8 = "";
        this.smodel.push(smodel2);

    }
}
