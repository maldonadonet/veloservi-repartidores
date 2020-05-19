import { Component } from '@angular/core';
import { Platform, MenuController } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from "../providers/user/user";

@Component({
    templateUrl: "app.html",
})
export class MyApp {
    rootPage: any;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private _us: UserProvider,
        private menuCtrl: MenuController
    ) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.

            if (this._us.usuario_activo()) {
                console.log(this._us.token);
                this.rootPage = "PedidosPage";
            } else {
                this.rootPage = "LoginPage";
            }

            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    openPage(page: string) {
        console.log(page);
        this.rootPage = page;
        this.menuCtrl.close();
    }

    salir() {
        this._us.cerrar_sesion();
        this.rootPage = "LoginPage";
        this.menuCtrl.close();
    }
}

