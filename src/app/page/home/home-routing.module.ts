import { ShopdetailComponent } from './../../component/shopdetail/shopdetail.component';
import { ShoplistComponent } from './../../component/shoplist/shoplist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'shoplist/:categoryID',
    component: ShoplistComponent
  },
  {
    path: 'shopdetail/:ShopID',
    component: ShopdetailComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
