import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabmenuPage } from './tabmenu.page';

const routes: Routes = [
  {
    path: '',
    component: TabmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenuPageRoutingModule {}
