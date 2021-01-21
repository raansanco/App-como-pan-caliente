import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AlertController, LoadingController, NavController, ToastController} from '@ionic/angular';
import { RecibirdatosService } from '../recibirdatos.service';
import { CarritodecomprasPage } from '../carritodecompras/carritodecompras.page';
import { AppComponent } from '../app.component';
import { AccessProviders } from '../providers/access-providers';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.page.html',
  styleUrls: ['./detalleproducto.page.scss'],
})
export class DetalleproductoPage implements OnInit {

  cantidad: number=1;
  items:any;
  


  constructor(private router: Router, private http: HttpClient,private activatedRoute: ActivatedRoute, public navCtrl: NavController, private RecibirdatosService: RecibirdatosService, public component: AppComponent,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders) {

    

    
   }

  ngOnInit() {
    this.RecibirdatosService.$getObjectSource.subscribe(data => {

      console.log(data)
      this.items=data;
      
  }).unsubscribe();
  }

  ver(){
    this.items['cantidad']=this.cantidad;
    this.items['subtotal']=this.items['cantidad']*this.items['precio'];
    this.items['estado']=1;
    console.log(this.items);
  }
  recibir(items){
    this.RecibirdatosService.sendObjectSource(items);
    this.router.navigate(['/productoagregado']);
    
  }

  agregarCantidad(){
    if(this.cantidad<20)
    this.cantidad=this.cantidad+1;

  }
  quitarCantidad(){
    if(this.cantidad>1)
    this.cantidad=this.cantidad-1;
    
  }

  async tryCarrito(){
  
      return new Promise(resolve =>{
        let body = {
          aksi: 'proceso_carrito',
          id_usuario: this.component.id_usuario,
          nombre: this.items['nombre'],
          imagen: this.items['imagen'],
          precio: this.items['precio'],
          subtotal: this.items['subtotal'],
          cantidad: Number(this.items['cantidad']),
          estado: this.items['estado'],
        }
        this.accsPrvds.postData(body, 'proses_api.php').subscribe();

      });
    
    
  }    

}
