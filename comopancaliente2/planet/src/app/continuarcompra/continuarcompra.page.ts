import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { AccessProviders } from '../providers/access-providers';
import { RecibirdatosService } from '../recibirdatos.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-continuarcompra',
  templateUrl: './continuarcompra.page.html',
  styleUrls: ['./continuarcompra.page.scss'],
})
export class ContinuarcompraPage implements OnInit {

  direccion: string=this.component.direccion;
  infoadi: string="";
  items: any;
  pedido: any = {
    id_usuario: '',
    documento: '',
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    infoadi: '',
    pedido: '',
    total: ''

  };

  constructor(private RecibirdatosService: RecibirdatosService, private router: Router,
    public toastCtrl: ToastController, public component: AppComponent, private accsPrvds: AccessProviders,private http: HttpClient) { }

  ngOnInit() {

    this.RecibirdatosService.$getObjectSource.subscribe(data => {

      this.items = data;

    }).unsubscribe();
  }

  async guardarPedido() {
    if (this.direccion == "") {
      this.presentToast();
    } else {
      for (let i = 0; i < this.items.length; i++) {
        this.pedido['pedido'] = this.pedido['pedido'] + '- ' + this.items[i]['nombre'] + '- cant:' + this.items[i]['cantidad'] + '.\r\n';
      }
      this.pedido['direccion'] = this.direccion;
      this.pedido['infoadi'] = this.infoadi;
      this.pedido['total'] = this.items['totalcompra'];
      this.pedido['nombre'] = this.component.nombre;
      this.pedido['telefono'] = this.component.telefono;
      this.pedido['documento'] = this.component.documento;
      this.pedido['apellido'] = this.component.apellido;
      this.pedido['id_usuario'] = this.component.id_usuario;
      this.tryCarrito();
      this.vaciar_carrito(this.component.id_usuario);
      this.gotoPedidorealizado();
    }
  }
  async tryCarrito(){
  
    return new Promise(resolve =>{
      let body = {
        aksi: 'agregar_pedido',
        id_usuario: this.component.id_usuario,
        documento: this.component.documento,
        nombre: this.component.nombre,
        apellido: this.component.apellido,
        telefono: this.component.telefono,
        direccion: this.pedido['direccion'],
        infoadi: this.pedido['infoadi'],
        pedido: this.pedido['pedido'],
        total: this.pedido['total']
        
      }
      this.accsPrvds.postData(body, 'proses_api.php').subscribe();

    });
  
  
} 
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Su dirección es requerida',
      duration: 3000
    });
    toast.present();
  }

gotoPedidorealizado(){
  this.router.navigate(['/pedidorealizado']);
}

async vaciar_carrito(id_usuario){

  return new Promise(resolve=>{
    let body = {
      aksi: 'vaciar_carrito',
      id_usuario: id_usuario
    }
    this.accsPrvds.postData(body, 'proses_api.php').subscribe((res:any)=>{
      if(res.success==true){
      } else{ 
      }
    });
    
    
  });
  
  
  

}


}









