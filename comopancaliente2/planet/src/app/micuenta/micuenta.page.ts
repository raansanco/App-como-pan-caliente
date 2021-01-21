import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import {AccessProviders} from '.././providers/access-providers';
import {Storage} from '@ionic/storage';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {

  datastorage: any;
  name: string;
  last_name: string;
  document: string;
  telephone: string;
  mail: string;
  address: string;
  
  



  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders,
    private storage: Storage,
    private navCtrl: NavController, 
    public component: AppComponent
    ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){

    this.storage.get('storage_xxx').then((res)=>{
      console.log(res);
      this.datastorage= res;
      this.name = this.datastorage.nombre;
      this.last_name= this.datastorage.apellido;
      this.document= this.datastorage.documento;
      this.telephone= this.datastorage.telefono;
      this.mail= this.datastorage.correo;
      this.address= this.datastorage.direccion;
      this.component.id_usuario= this.datastorage.id_usuario;
      
      
      
    });
  }


  async procesoLogout(){

    this.storage.clear();
    this.navCtrl.navigateRoot(['/login']);
    const toast= await this.toastCtrl.create({
      message: 'Cierre de sesion satisfactorio!',
      duration: 1500
    });
    toast.present();
  }

  

}
