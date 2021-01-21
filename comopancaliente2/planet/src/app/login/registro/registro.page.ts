import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { resolve } from 'dns';
import { promise } from 'protractor';
import {AccessProviders} from '../../providers/access-providers';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string="";
  apellido: string="";
  documento: string="";
  telefono: string="";
  correo: string="";
  contrasena: string="";
  direccion: string="";

  disabledButton;


  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){

    this.disabledButton = false;

  }
  
  goToLogin(){
    this.router.navigate(['/login']);
  }

  async tryRegister(){

    if(this.nombre==""){
      this.presentToast('Su nombre es requerido');

    } else if (this.apellido =="") {
      this.presentToast('Su apellido es requerido') 

    }else if (this.documento =="") {
      this.presentToast('Su documento es requerido') 

    }else if (this.telefono =="") {
      this.presentToast('Su telefono es requerido') 

    }else if (this.correo =="") {
      this.presentToast('Su correo es requerido') 

    }else if (this.contrasena =="") {
      this.presentToast('Su contraseña es requerida') 

    }else if (this.direccion =="") {
      this.presentToast('Su direccion es requerida') 

    }else {
      this.disabledButton = true;
      const loader= await this.loadingCtrl.create({
        message: 'Porfavor Espera......'
      });
      loader.present();

      return new Promise(resolve =>{
        let body = {
          aksi: 'proceso_registro',
          nombre: this.nombre,
          apellido: this.apellido,
          documento: this.documento,
          telefono: this.telefono,
          correo: this.correo,
          contrasena: this.contrasena,
          direccion: this.direccion
        }
        this.accsPrvds.postData(body, 'proses_api.php').subscribe((res:any)=>{
         if(res.success==true){
          loader.dismiss();
          this.disabledButton = false;
          this.presentToast(res.msg);
          this.router.navigate(['/login'])
         } else{
          loader.dismiss();
          this.disabledButton = false;
          this.presentToast(res.msg);
        
         }

        }, (err)=>{
          loader.dismiss();
          this.disabledButton = false;
          this.presentAlert('Timeout');

        });

      });
    
    }
  }

    async presentToast(a){
      const toast= await this.toastCtrl.create({
        message: a,
        duration: 1500,
        position: 'top'
      });
      toast.present();
    }
      async presentAlert(a) {
        const alert = await this.alertCtrl.create({
          header:a,
          backdropDismiss: false,
          buttons: [
            {
              text: 'close',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Vuelve a intentarlo',
              handler: () => {
                this.tryRegister();
              }
            }
          ]
        });
    
        await alert.present();
      }
    

}

