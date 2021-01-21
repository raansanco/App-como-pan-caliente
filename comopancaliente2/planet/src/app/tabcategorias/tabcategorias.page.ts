import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AccessProviders } from '../providers/access-providers';
import { RecibirdatosService } from '../recibirdatos.service';

@Component({
  selector: 'app-tabcategorias',
  templateUrl: './tabcategorias.page.html',
  styleUrls: ['./tabcategorias.page.scss'],
})
export class TabcategoriasPage implements OnInit {

  categorias;

  constructor(private router: Router, private http: HttpClient, private RecibirdatosService: RecibirdatosService,private accsPrvds: AccessProviders, public component: AppComponent ) { 
    this.http.get("https://tupangourmet.com/comopancaliente2/api/consulta_categorias.php").subscribe(snap => {
      console.log(snap);
      this.categorias = snap;
    });
  }

  ngOnInit() {
  }
  recibir(items) {
    this.RecibirdatosService.sendObjectSource(items);
    this.router.navigate(['/tabproductos'])

  }
  goToMiCuenta() {
    this.router.navigate(['/micuenta']);
  }
  async consultarPedidos() {

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
