import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { Http } from '@angular/http';
import { UpdatePage} from '../update/update';



@Component({
    selector: 'page-forgotpassword',
    templateUrl: 'forgotpassword.html',
  })
  export class ForgotPasswordPage {
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    }

    navigateToHome() {
      console.log("Navigating..");
      this.navCtrl.push(HomePage);
    }
}