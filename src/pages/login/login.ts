import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from "ionic-angular";
import { UserProvider } from './../../providers/user/user';

@IonicPage()
@Component({
    selector: "page-login",
    templateUrl: "login.html",
})

export class LoginPage {
    
    user:any = {
        email: '',
        password: ''
    }

    constructor(public navCtrl: NavController, public navParams: NavParams, private _us: UserProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

    ionViewDidLoad() {
        console.log("Constructor LoginPage");
    }

    login(){

        let loading = this.loadingCtrl.create({
            content: 'Iniciando sesión...'
        });

        loading.present();

        this._us.login(this.user.email, this.user.password).subscribe(()=>{
            
            if( this._us.usuario_activo() ){
                this.navCtrl.setRoot("PedidosPage");
                loading.dismiss();
            }else{
                loading.dismiss();
                this.limpiar();
            }
        });
    }

    limpiar(){
        this.user.password = '';
    }
}
