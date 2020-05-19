import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: "page-contacto",
    templateUrl: "contacto.html",
})
export class ContactoPage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private menuCtrl: MenuController
    ) {}

    ionViewDidLoad() {
        console.log("ionViewDidLoad ContactoPage");
    }

    abrirmenu() {
        this.menuCtrl.toggle();
    }
}
