import { EmployeelistComponent } from './../../component/employeelist/employeelist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeservicePage } from './employeeservice.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeservicePage
  },
  {
    path:'employeelist/:serviceID',
    component:EmployeelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeservicePageRoutingModule {}
