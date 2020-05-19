import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";



@IonicPage()
@Component({
    selector: "page-perfil",
    templateUrl: "perfil.html",
})
export class PerfilPage {
    user: any = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
        private _us: UserProvider) {
          this._us.cargar_storage();
          this.user = JSON.parse(this._us.User);
          console.log(this.user);
        }

    ionViewDidLoad() {
        console.log("ionViewDidLoad PerfilPage");
    }

    abrirmenu() {
        this.menuCtrl.toggle();
    }

    actualizar_perfil(){
      this.navCtrl.push("EditProfilePage", { user: this.user });
    }
}
