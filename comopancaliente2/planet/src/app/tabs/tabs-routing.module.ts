import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
  
    children: [
      {
        path: 'tabmenu',
        loadChildren: () => import ('../tabmenu/tabmenu.module').then(m => m.TabmenuPageModule)
      },
      {
        path: 'tabmispedidos',
        loadChildren: () => import ('../tabmispedidos/tabmispedidos.module').then(m => m.TabmispedidosPageModule)
      },
      {
        path: 'tabproductos',
        loadChildren: () => import ('../tabproductos/tabproductos.module').then(m => m.TabproductosPageModule)
      },
      {
        path: 'tabcategorias',
        loadChildren: () => import ('../tabcategorias/tabcategorias.module').then(m => m.TabcategoriasPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabmenu',
        pathMatch: 'full'
      }
    ]

  },
  {
    path: '',
    redirectTo: '/tabs/tabmenu',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
