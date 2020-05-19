import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosProvider } from './../../providers/pedidos/pedidos';


@IonicPage()
@Component({
    selector: "page-detalle-pedido-esp",
    templateUrl: "detalle-pedido-esp.html",
})
export class DetallePedidoEspPage {
    
    pedido: any[] = [];
    estatus:string='';

    constructor(public navCtrl: NavController, public navParams: NavParams, private _ps: PedidosProvider) {
      this.pedido = this.navParams.get("item");
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad DetallePedidoEspPage");
    }

    aceptarPedido(){
        let id_pediddo = this.pedido['id'];

        this._ps.order_accept_especiales(id_pediddo).subscribe(()=>{
            this.navCtrl.pop();
        });
        this.pedido = [];
    }

    cancelarPedido(){
        this._ps.order_decline_especiales('Pedido Cancelado', this.pedido['id']).subscribe(() => {
            this.navCtrl.setRoot('PedidosPage');
        });
        this.pedido = [];
    }

    rechazar_pedido() {
       
    }

    actualizar_estado() {
        this._ps.actualizar_order_especiales(this.estatus,this.pedido['id']).subscribe(() => {
            this.navCtrl.setRoot('PedidosPage');
        });
        this.pedido = [];
    }
}
