import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { Http } from '@angular/http';
import { UpdatePage} from '../update/update';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  }

 navigateToHome() {
   this.http
  .post("https://giver-api.herokuapp.com/login", {
    email: this.email,
    password: this.password
  })
  .subscribe(
    result => {
      console.log(console.log("Navigating..."))
      this.navCtrl.push(HomePage);
    },

    error => {
      console.log(error);
    }
  );

  }
navigateToRegister(){
  console.log("Navigating...");
  this.navCtrl.push(RegisterPage)
}
navigateToUpdate(){
  console.log("Navigating..");
  this.navCtrl.push(UpdatePage)
}

navigateToForgotPassword(){
  console.log("Navigating..");
  this.navCtrl.push(ForgotPasswordPage)
}


}
