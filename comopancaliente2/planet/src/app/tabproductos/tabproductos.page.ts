import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from '../app.component';
import { RecibirdatosService } from '../recibirdatos.service';
import { AccessProviders } from '../providers/access-providers';

@Component({
  selector: 'app-tabproductos',
  templateUrl: './tabproductos.page.html',
  styleUrls: ['./tabproductos.page.scss'],
})
export class TabproductosPage implements OnInit {

  listado_productos;
  id_categoria: any;


  constructor(private router: Router, private http: HttpClient, public component: AppComponent,private RecibirdatosService: RecibirdatosService, private accsPrvds: AccessProviders) {

  
   }

   ngOnInit() {
    this.RecibirdatosService.$getObjectSource.subscribe(data => {
      console.log(data)
      this.id_categoria=data;
      this.consultarPedidos();
      
  }).unsubscribe();
  }
  async consultarPedidos() {

    return new Promise(resolve => {
      let body = {
        id_categoria: this.id_categoria


      }
      this.accsPrvds.postData(body, 'consultaproductos.php').subscribe(snap => {
        console.log(snap);
        this.listado_productos=snap;
        
       
      });

    });


  }


  goToMiCuenta(){
    this.router.navigate(['/micuenta']);
  }
  goToCarritoDeCompras(){
    this.consultarCarrito();
  }
  recibir(items){
    this.RecibirdatosService.sendObjectSource(items);
    this.router.navigate(['/detalleproducto'])
    
  }
  async consultarCarrito() {

    return new Promise(resolve => {
      let body = {
        id_usuario: this.component.id_usuario


      }
      this.accsPrvds.postData(body, 'consulta_carrito.php').subscribe(snap => {
        console.log(snap);
        if (snap['length']==0) {    
          this.router.navigate(['/carritovacio']);
        }else{
          this.router.navigate(['/carritodecompras']);
        }
      });

    });
  }
}
