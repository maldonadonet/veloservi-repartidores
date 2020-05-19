import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosProvider } from './../../providers/pedidos/pedidos';


@IonicPage()
@Component({
    selector: "page-detalle-pedidos",
    templateUrl: "detalle-pedidos.html",
})
export class DetallePedidosPage {
    
    items: any[] = [];
    estatus:string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, private _ps: PedidosProvider) {
      this.items = this.navParams.get("items");    
      console.log(this.items);
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad DetallePedidosPage");
        console.log(this.items);
    }

    aceptar_pedido(){

        this._ps.order_accept(this.items.id_pedido).subscribe(()=>{
            this.navCtrl.setRoot('PedidosPage');
        });

    }

    rechazar_pedido(){
        this._ps.order_decline('Pedido Cancelado',this.items.id_pedido).subscribe(() => {
            this.navCtrl.setRoot('PedidosPage');
        });
    }

    actualizar_estado() {
        this._ps.actualizar_order(this.estatus,this.items.id_pedido).subscribe(() => {
            this.navCtrl.setRoot('PedidosPage');
        });
    }
}
