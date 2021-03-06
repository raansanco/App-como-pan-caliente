import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import {NavController} from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public id_usuario: number;
  public nombre: any;
  public telefono: any;
  public documento: any;
  public apellido: any;
  public carritoproductos: object[];
  public direccion: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    public navCtrl: NavController
  ) {





    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('storage_xxx').then((res)=>{
      if (res==null){
        this.navCtrl.navigateRoot('/login')
      }else{
        this.navCtrl.navigateRoot('/tabs/tabmenu')

      }
    });
  }
}
