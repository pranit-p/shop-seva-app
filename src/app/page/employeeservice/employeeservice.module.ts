import { EmployeelistComponent } from './../../component/employeelist/employeelist.component';
import { EmployeeservicelistComponent } from './../../component/employeeservicelist/employeeservicelist.component';
import { BannerComponent } from './../../component/banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeservicePageRoutingModule } from './employeeservice-routing.module';

import { EmployeeservicePage } from './employeeservice.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeservicePageRoutingModule
  ],
  declarations: [EmployeeservicePage,EmployeelistComponent,EmployeeservicelistComponent,BannerComponent]
})
export class EmployeeservicePageModule {}
