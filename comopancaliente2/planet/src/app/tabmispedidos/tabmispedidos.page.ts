import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { AccessProviders } from '../providers/access-providers';

@Component({
  selector: 'app-tabmispedidos',
  templateUrl: './tabmispedidos.page.html',
  styleUrls: ['./tabmispedidos.page.scss'],
})
export class TabmispedidosPage implements OnInit {

  mispedidos: any;

  constructor(private router: Router, private http: HttpClient, public component: AppComponent, private accsPrvds: AccessProviders) {

  }

  ngOnInit() {
    this.consultarPedidos();
  }
  async consultarPedidos() {

    return new Promise(resolve => {
      let body = {
        id_usuario: this.component.id_usuario


      }
      this.accsPrvds.postData(body, 'consulta_mispedidos.php').subscribe(snap => {
        console.log(snap);
        this.mispedidos = snap;
      });

    });


  }
  goToMiCuenta() {
    this.router.navigate(['/micuenta']);
  }
  goToCarritoDeCompras() {
    this.consultarCarrito();
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
