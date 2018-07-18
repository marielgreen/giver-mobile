import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shelter } from '../home/Models';

@Component({
    selector: 'page-shelter1list',
    templateUrl: 'shelter1list.html'
})

export class Shelter1Page {

    public shelter: Shelter = new Shelter();

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.shelter = navParams.get('s')

    }
}