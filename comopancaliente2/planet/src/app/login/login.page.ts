import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import {AccessProviders} from '.././providers/access-providers';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string="";
  contrasena: string="";

  disabledButton;



  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders,
    private storage: Storage,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }
  
  ionViewDidEnter(){

    this.disabledButton = false;
  }
  goToRegistro(){
    this.router.navigate(['/registro']);
  }
  goToResetPassword(){
    this.router.navigate(['/resetpassword']);
  }

  async tryLogin(){
    if(this.correo =="") {
      this.presentToast('Tu correo es requerido');

    }else if (this.contrasena =="") {
      this.presentToast('Tu contraseña es requerida'); 

    }else {
      this.disabledButton = true;
      const loader= await this.loadingCtrl.create({
        message: 'Porfavor Espera......'
      });
     loader.present();

      return new Promise(resolve =>{
        let body = {
          aksi: 'proceso_login',
          correo: this.correo,
          contrasena: this.contrasena
        }
        this.accsPrvds.postData(body, 'proses_api.php').subscribe((res:any)=>{
         if(res.success==true){
          loader.dismiss();
          this.disabledButton = false;
          this.presentToast('Logueo Exitoso!');
          this.storage.set('storage_xxx', res.result);   
          this.navCtrl.navigateRoot(['/tabs/tabmenu']);
         } else{
          loader.dismiss();
          this.disabledButton = false;
          this.presentToast('Correo y contraseña incorrectos');
        
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
        duration: 1500
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
              this.tryLogin();
            }
          }
        ]
      });
  
      await alert.present();
    } 


}
