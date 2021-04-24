import { ShopdetailComponent } from './../../component/shopdetail/shopdetail.component';
import { ShoplistComponent } from './../../component/shoplist/shoplist.component';
// import { EmployeeservicelistComponent } from './../../component/employeeservicelist/employeeservicelist.component';
import { CategorylistComponent } from './../../component/categorylist/categorylist.component';
import { BannerComponent } from './../../component/banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,ShopdetailComponent,ShoplistComponent,CategorylistComponent,BannerComponent]
})
export class HomePageModule {}
