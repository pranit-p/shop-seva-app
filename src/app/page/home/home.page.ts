import { CategorylistComponent } from './../../component/categorylist/categorylist.component';
import { Component, OnInit,ViewChild, AfterViewInit    } from '@angular/core';
import { BannerComponent } from './../../component/banner/banner.component';
import { Globalconstant } from './../../class/globalconstant';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit ,AfterViewInit
{
  @ViewChild(BannerComponent) banner: BannerComponent ; 
  @ViewChild(CategorylistComponent) category: CategorylistComponent ; 
  
  languageId=Globalconstant.LanguageID;

  ionViewLoaded() {

    this.menuCtrl.enable(true);

 }
 ionViewDidEnter()
 {
  this.menuCtrl.enable(true);
 }
  constructor(public menuCtrl: MenuController) { }
  ngAfterViewInit()
  {
    this.menuCtrl.enable(true);

  }

  ngOnInit() 
  {
    this.menuCtrl.enable(true);
    this.languageId=Globalconstant.LanguageID;
  }
  

  doRefresh(event) 
  {
    //this.data=false;
    this.banner.ngOnInit(); 
    this.category.ngOnInit(); 
    setTimeout(() => 
    {
      event.target.complete();
    }, 2500);
  }


}
