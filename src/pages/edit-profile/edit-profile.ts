import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from "./../../providers/user/user";


@IonicPage()
@Component({
    selector: "page-edit-profile",
    templateUrl: "edit-profile.html",
})
export class EditProfilePage {
    user: any = {};
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _us: UserProvider
    ) {
        this.user = this.navParams.get("user");
        console.log("User:", this.user);
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad EditProfilePage");
    }

    update() {
        console.log(this.user);
        this._us.updateProfile(this.user).subscribe(() => {
            this._us.cerrar_sesion();
            this.navCtrl.setRoot("LoginPage");
        });
    }
}
