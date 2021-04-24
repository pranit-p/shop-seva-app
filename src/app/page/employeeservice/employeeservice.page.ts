import { BannerComponent } from './../../component/banner/banner.component';
import { EmployeeservicelistComponent } from './../../component/employeeservicelist/employeeservicelist.component';
import { Component, OnInit,ViewChild } from '@angular/core'; 
import { Globalconstant } from './../../class/globalconstant';

import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-employeeservice',
  templateUrl: './employeeservice.page.html',
  styleUrls: ['./employeeservice.page.scss'],
})
export class EmployeeservicePage implements OnInit {


  languageId=Globalconstant.LanguageID;
  @ViewChild(BannerComponent) banner: BannerComponent ; 
  @ViewChild(EmployeeservicelistComponent) eployeeservice: EmployeeservicelistComponent ; 
  
  ionViewLoaded() {

    this.menuCtrl.enable(true);

 }
 ionViewDidEnter()
 {
  this.menuCtrl.enable(true);
 }
 ngAfterViewInit()
  {
    this.menuCtrl.enable(true);

  }

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() 
  {
    this.menuCtrl.enable(true);
    this.languageId=Globalconstant.LanguageID;

  }

  doRefresh(event) 
  {
    this.banner.ngOnInit();
    this.eployeeservice.ngOnInit(); 
    setTimeout(() => 
    {
      event.target.complete();
    }, 2500);
  }


}
