import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicPageModule } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';


// @IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name: string;
  email: string;
  password: string;
  confirmPassword: string

  constructor(public navCtrl: NavController,public navParams: NavParams, public http: Http) {
  }
  navigateToHome(){
    this.http.post("https://giver-api.herokuapp.com/register", {
      name: this.name,
      email: this.email,
      password: this.password,
    }).subscribe(
      result => {console.log("Navigating...");
      this.navCtrl.push(HomePage);
    },
    err => {
      console.log(err)
    }
      
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

