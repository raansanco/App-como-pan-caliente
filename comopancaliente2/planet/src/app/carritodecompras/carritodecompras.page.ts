import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { RecibirdatosService } from '../recibirdatos.service';
import { AppComponent } from '../app.component';
import { maxHeaderSize } from 'http';
import { AccessProviders } from '../providers/access-providers';
import { RequestOptions } from 'https';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-carritodecompras',
  templateUrl: './carritodecompras.page.html',
  styleUrls: ['./carritodecompras.page.scss'],
})
export class CarritodecomprasPage implements OnInit {
  productos_carrito2;
  id_producto: string;
  totalcompra: number = 0;
  item: any;
  
  
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute, public navCtrl: NavController, private RecibirdatosService: RecibirdatosService, public component: AppComponent, private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders) {

  }


  async consultarPedidos() {

    return new Promise(resolve => {
      let body = {
        id_usuario: this.component.id_usuario


      }
      this.accsPrvds.postData(body, 'consulta_carrito.php').subscribe(snap => {
        console.log(snap);
        this.productos_carrito2 = snap;
        this.total();
      });

    });


  }
  eliminarItem2(id_item: Number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'charset' : 'utf-8'
      }),
      body: {
        id_item: Number(id_item)
      },
    };
    
    this.http
      .delete("https://tupangourmet.com/comopancaliente2/api/eliminar_item.php?id_item="+id_item)
      .subscribe((s) => {
        console.log(s);
      });
  }
  eliminarItem(id_item: Number) {

    return new Promise(resolve => {
      let body = {
        id_item: id_item
      }
      this.accsPrvds.postData(body, 'eliminar_item.php').subscribe(snap => {
        console.log(snap);
      });
    });
  }

  ngOnInit() {
    this.consultarPedidos();

    this.RecibirdatosService.$getObjectSource.subscribe(data => {

      this.item = data;
      console.log(this.item);
      
    }).unsubscribe();





  }

  total() {
    for (let i = 0; i < this.productos_carrito2.length; i++) {
      this.totalcompra = this.totalcompra + Number(this.productos_carrito2[i]['subtotal']);
    }

    this.productos_carrito2['totalcompra'] = String(this.totalcompra);

    this.item = this.productos_carrito2;
  }

  async borrar_producto(i:number) {

    return new Promise(resolve => {
      let body = {
        aksi: 'borrar_carrito',
        id: Number(i)
        
      }
      
      this.accsPrvds.postData(body, 'proses_api.php').subscribe((res: any) => {
        if (res.success == true) {
          this.presentToast('Borrado Correctamente');
          location.reload();


        } else {
          this.presentToast('Error al eliminar')
        }
      });


    });




  }

  gotoCarritodecompras() {
    this.router.navigate(['/carritodecompras']);
  }


  async presentToast(i) {
    const toast = await this.toastCtrl.create({
      message: i,
      duration: 1500
    });
    toast.present();
  }
  enviar(productos_carrito2) {
    this.RecibirdatosService.sendObjectSource(productos_carrito2);
    this.router.navigate(['/continuarcompra'])

  }


}
