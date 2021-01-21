import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonSlides, NavController } from '@ionic/angular';
import { RecibirdatosService } from '../recibirdatos.service';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage';
import { AccessProviders } from '../providers/access-providers';




@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.page.html',
  styleUrls: ['./tabmenu.page.scss'],
})
export class TabmenuPage implements OnInit {

  datastorage: any;
  banners;
  productos_hot;
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };


  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute, public navCtrl: NavController, private RecibirdatosService: RecibirdatosService, public component: AppComponent,
    private storage: Storage, private accsPrvds: AccessProviders) {


      
    this.http.get("https://tupangourmet.com/comopancaliente2/api/consulta_prod_hot.php").subscribe(snap => {
      
      this.productos_hot = snap;

    });

    this.http.get("https://tupangourmet.com/comopancaliente2/api/consulta_banners.php").subscribe(snap => {
 
      this.banners = snap;

    });




  }

  ngOnInit() {
  }
  ionViewDidEnter() {

    this.storage.get('storage_xxx').then((res) => {
      this.datastorage = res;
      this.component.id_usuario = this.datastorage.id_usuario;
      this.component.nombre = this.datastorage.nombre;
      this.component.telefono = this.datastorage.telefono;
      this.component.documento = this.datastorage.documento;
      this.component.apellido = this.datastorage.apellido;
      this.component.direccion = this.datastorage.direccion;






    });
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }



  goToMiCuenta() {
    this.router.navigate(['/micuenta']);
  }
 
  recibir(items) {
    this.RecibirdatosService.sendObjectSource(items);
    this.router.navigate(['/detalleproducto'])

  }

  consultarPedidos() {

    return new Promise(resolve => {
      let body = {
        id_usuario: this.component.id_usuario


      }
      this.accsPrvds.postData(body, 'consulta_carrito.php').subscribe(snap => {
        
        if (snap['length']==0) {    
          this.router.navigate(['/carritovacio']);
        }else{
          this.router.navigate(['/carritodecompras']);
        }
      });

    });
  }
}
