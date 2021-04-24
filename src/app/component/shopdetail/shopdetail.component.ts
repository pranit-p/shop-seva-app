import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globalconstant } from './../../class/globalconstant';
import { MenuController } from '@ionic/angular';
import { Downloader } from '@ionic-native/downloader/ngx';
import { ProducttransactionService } from './../../service/producttransaction.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-shopdetail',
  templateUrl: './shopdetail.component.html',
  styleUrls: ['./shopdetail.component.scss'],
})
export class ShopdetailComponent implements OnInit 
{
  ShopID;
  baseUrl=Globalconstant.webApi;
  shopdetail:any;

  languageId=Globalconstant.LanguageID;
  loaded=false;

  constructor(private callNumber: CallNumber,private glosary:ProducttransactionService,public activeRoute:ActivatedRoute,public menuCtrl: MenuController) { }

  ngOnInit() 
  {
    



    this.menuCtrl.enable(false);







    this.loaded=false;
    this.ShopID=this.activeRoute.snapshot.paramMap.get('ShopID'); 
    let response=this.glosary.getShopInformation(this.ShopID);
    response.subscribe(res =>
     {
      this.shopdetail=res['shoplist'][0];
 
      setTimeout(() => {        
        this.loaded=true;
      }, 1500);

       console.log(this.shopdetail);
     },
     err => 
     {

     });
  }
  doRefresh(event) 
  {
  this.ngOnInit();
    setTimeout(() => 
    {
      event.target.complete();
    }, 2500);
  }

  callNow(number) 
  {
    //alert(number);
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }


}
