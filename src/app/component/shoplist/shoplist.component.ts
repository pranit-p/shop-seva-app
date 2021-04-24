import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProducttransactionService } from './../../service/producttransaction.service';
import { Globalconstant } from './../../class/globalconstant';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss'],
})
export class ShoplistComponent implements OnInit 
{
  loaded=false;
  baseUrl=Globalconstant.webApi;
  shopList:any;
  languageId=Globalconstant.LanguageID;
  CategoryID;
  constructor(private glosary:ProducttransactionService,public activeRoute:ActivatedRoute,public menuCtrl: MenuController) { }

  doRefresh(event) 
  {
  this.ngOnInit();
    setTimeout(() => 
    {
      event.target.complete();
    }, 2500);
  }

  ngOnInit() 
  {

    this.menuCtrl.enable(false);

    this.loaded=false;
    
    this.CategoryID=this.activeRoute.snapshot.paramMap.get('categoryID'); 
    let response=this.glosary.getShopList(this.CategoryID,1);
    response.subscribe(res =>
     {
      this.shopList=res['shoplist'];
       console.log(this.shopList);
       setTimeout(() => {        
        this.loaded=true;
      }, 1500);
     },
     err => 
     {
    

     });
  }
  check(id,id1)
  {
    return 1;
  }

}
