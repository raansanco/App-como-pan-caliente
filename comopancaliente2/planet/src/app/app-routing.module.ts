import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./login/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabproductos',
    loadChildren: () => import('./tabproductos/tabproductos.module').then( m => m.TabproductosPageModule)
  },
  {
    path: 'tabmispedidos',
    loadChildren: () => import('./tabmispedidos/tabmispedidos.module').then( m => m.TabmispedidosPageModule)
  },
  {
    path: 'tabmenu',
    loadChildren: () => import('./tabmenu/tabmenu.module').then( m => m.TabmenuPageModule)
  },
  {
    path: 'micuenta',
    loadChildren: () => import('./micuenta/micuenta.module').then( m => m.MicuentaPageModule)
  },
  {
    path: 'carritodecompras',
    loadChildren: () => import('./carritodecompras/carritodecompras.module').then( m => m.CarritodecomprasPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import ('./login/resetpassword/resetpassword.module').then (m => m.ResetpasswordPageModule)
  },
  {
    path: 'detalleproducto',
    loadChildren: () => import('./detalleproducto/detalleproducto.module').then( m => m.DetalleproductoPageModule)
  },
  {
    path: 'carritovacio',
    loadChildren: () => import('./carritovacio/carritovacio.module').then( m => m.CarritovacioPageModule)
  },
  {
    path: 'productoagregado',
    loadChildren: () => import('./productoagregado/productoagregado.module').then( m => m.ProductoagregadoPageModule)
  },
  {
    path: 'continuarcompra',
    loadChildren: () => import('./continuarcompra/continuarcompra.module').then( m => m.ContinuarcompraPageModule)
  },
  {
    path: 'pedidorealizado',
    loadChildren: () => import('./pedidorealizado/pedidorealizado.module').then( m => m.PedidorealizadoPageModule)
  },
  {
    path: 'tabcategorias',
    loadChildren: () => import('./tabcategorias/tabcategorias.module').then( m => m.TabcategoriasPageModule)
  }
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
