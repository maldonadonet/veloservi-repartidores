import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertController, Platform } from "ionic-angular";
import { URL_SERVICIOS } from "../../config/url.servicios";
import { Storage } from "@ionic/storage";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";
import { UserProvider } from "../user/user";


@Injectable()
export class PedidosProvider {
    token: string;

    constructor( public http: HttpClient, private alertCtrl: AlertController, private platform: Platform,private storage: Storage,private _us: UserProvider) {
        console.log("Constructor Provider Pedidos");
    }

    obtener_pedidos() {
        this.token = this._us.token;
        let usuario = JSON.parse(this._us.User);

        let url = URL_SERVICIOS + `/historial_pedidos_repartidor/${usuario.id}/${this._us.token}`;

        return this.http.get(url);
    }
  
    obtener_pedidos_especiales() {
		this.token = this._us.token;
		let usuario = JSON.parse(this._us.User);

		let url = URL_SERVICIOS + `/historial_pedidos_especiales_repartidor/${usuario.id}/${this._us.token}`;

		return this.http.get(url);
    }
    
    order_accept(id_pedido){

        this.token = this._us.token;
        let usuario = JSON.parse(this._us.User);
        let url = URL_SERVICIOS + `/pedido_aceptado/${usuario.id}/${this.token}`;
        let estatus = 'Autorizado: En proceso';

        return this.http.post(url, { estatus,id_pedido }).map((resp) => {
            let data_resp = resp;

            if (data_resp["error"]) {
                this.alertCtrl
                    .create({
                        title: "Error enviar estado",
                        subTitle: 'Verifica tu conexión a Internet o Intental de nuevo',
                        buttons: ["Ok"],
                    })
                    .present();
            } else {
                this.alertCtrl.create({
                    title: 'Estado actualizado correctamente',
                    subTitle: "Continua con el proceso",
                    buttons: ["Ok"],
                }).present();
            }
        });
    }

    order_decline(estatus:string,id_pedido:number){

        this.token = this._us.token;
        let usuario = JSON.parse(this._us.User);
        let url = URL_SERVICIOS + `/pedido_rechazado/${usuario.id}/${this.token}`;
        

        return this.http.post(url, { estatus, id_pedido }).map((resp) => {
            let data_resp = resp;

            if (data_resp["error"]) {
                this.alertCtrl
                    .create({
                        title: "Error enviar estado",
                        subTitle: 'Verifica tu conexión a Internet o Intental de nuevo',
                        buttons: ["Ok"],
                    })
                    .present();
            } else {
                this.alertCtrl.create({
                    title: 'Pedido Cancelado',
                    subTitle: "El pedido estará en proceso de revisión",
                    buttons: ["Ok"],
                }).present();
            }
        });
    }

    actualizar_order(estatus: string, id_pedido: number) {
        this.token = this._us.token;
        let usuario = JSON.parse(this._us.User);
        let url = URL_SERVICIOS + `/actualizar_estado/${usuario.id}/${this.token}`;


        return this.http.post(url, { estatus, id_pedido }).map((resp) => {
            let data_resp = resp;

            if (data_resp["error"]) {
                this.alertCtrl
                    .create({
                        title: "Error enviar estado",
                        subTitle: 'Verifica tu conexión a Internet o Intental de nuevo',
                        buttons: ["Ok"],
                    })
                    .present();
            } else {
                this.alertCtrl.create({
                    title: 'Pedido actualizado',
                    subTitle: "El estado del pedido se actualizo correctamente",
                    buttons: ["Ok"],
                }).present();
            }
        });
    }

    // metodos para actualizar los estados de los pedidos
    order_accept_especiales(id_pedido) {

        this.token = this._us.token;
        let usuario = JSON.parse(this._us.User);
        let url = URL_SERVICIOS + `/pedido_aceptado_especiales/${usuario.id}/${this.token}`;
        let estatus = 'Autorizado: En proceso';

        return this.http.post(url, { estatus, id_pedido }).map((resp) => {
            let data_resp = resp;

            if (data_resp["error"]) {
                this.alertCtrl
                    .create({
                        title: "Error al enviar estado",
                        subTitle: 'Verifica tu conexión a Internet o Intental de nuevo',
                        buttons: ["Ok"],
                    })
                    .present();
            } else {
                this.alertCtrl.create({
                    title: 'Estado actualizado correctamente',
                    subTitle: "Continua con el proceso",
                    buttons: ["Ok"],
                }).present();
            }
        });
    }

    order_decline_especiales(estatus: string, id_pedido: number) {

        this.token = this._us.token;
        let usuario = JSON.parse(this._us.User);
        let url = URL_SERVICIOS + `/pedido_rechazado_especiales/${usuario.id}/${this.token}`;


        return this.http.post(url, { estatus, id_pedido }).map((resp) => {
            let data_resp = resp;

            if (data_resp["error"]) {
                this.alertCtrl
                    .create({
                        title: "Error enviar estado",
                        subTitle: 'Verifica tu conexión a Internet o Intental de nuevo',
                        buttons: ["Ok"],
                    })
                    .present();
            } else {
                this.alertCtrl.create({
                    title: 'Pedido Cancelado',
                    subTitle: "El pedido estará en proceso de revisión",
                    buttons: ["Ok"],
                }).present();
            }
        });
    }

    actualizar_order_especiales(estatus: string, id_pedido: number) {
        this.token = this._us.token;
        let usuario = JSON.parse(this._us.User);
        let url = URL_SERVICIOS + `/actualizar_estado_espaciales/${usuario.id}/${this.token}`;


        return this.http.post(url, { estatus, id_pedido }).map((resp) => {
            let data_resp = resp;

            if (data_resp["error"]) {
                this.alertCtrl
                    .create({
                        title: "Error enviar estado",
                        subTitle: 'Verifica tu conexión a Internet o Intental de nuevo',
                        buttons: ["Ok"],
                    })
                    .present();
            } else {
                this.alertCtrl.create({
                    title: 'Pedido actualizado',
                    subTitle: "El estado del pedido se actualizo correctamente",
                    buttons: ["Ok"],
                }).present();
            }
        });
    }
}
