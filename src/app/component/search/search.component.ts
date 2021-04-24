import { Component, OnInit,ViewChild } from '@angular/core';
import { ProducttransactionService } from './../../service/producttransaction.service';
import { Globalconstant } from './../../class/globalconstant';
import { MenuController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';
import * as $ from "jquery";
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit 
{
  @ViewChild('focusInput') myInput ;
  public searchTerm: string = "";
  public items: any=[];
  public filterData :any=[];
  languageId=Globalconstant.LanguageID;
  loaded=true;
  constructor(private glosary:ProducttransactionService,private router: Router,public menuCtrl: MenuController,public navCtrl: NavController) { }
  
  ionViewLoaded() {

    setTimeout(() => {
      this.myInput.setFocus();
    },150); //a least 150ms.

 }
 gotowindow(MerchantID,isShop,IsCategory)
 {
    if(isShop=="1")
    {
      this.router.navigateByUrl('home/shopdetail/'+MerchantID);
    }
    else
    {
      if(IsCategory=="1")
      {
        this.router.navigateByUrl('home/shoplist/'+MerchantID);
      }
      else
      {
        this.router.navigateByUrl('employeeservice/employeelist/'+MerchantID);
      }
      
    }
 }


  ngOnInit() 
  {

    this.menuCtrl.enable(false);


    this.languageId=Globalconstant.LanguageID;
    setTimeout(function () {
      $('#searchTerm').focus();
  }, 500);


  }
  setFilteredItems()
  {
    var searchvalue=$('#searchTerm').val();    

    
    if(searchvalue.length==0 && this.filterData.length!=0)
    {
      this.filterData=[];
    }

    if(searchvalue.length>=3)
    {
      this.loaded=false;
    let response=this.glosary.getsearchvalue(searchvalue);
    response.subscribe(res =>
    {
      this.items=res['names'];
      this.filterData = this.items;
      console.log(res);
      
      setTimeout(() => {        
        this.loaded=true;
      }, 1500);
    },
    err => {  

    });
    }
    if(searchvalue.length>3 && this.languageId=='1')
    {
      this.filterData = this.items.filter((location) => {
        return location.englishname.toLowerCase().indexOf(searchvalue.toLowerCase()) > -1;
      });
    }
    if(searchvalue.length>3 && this.languageId=='2')
    {
      this.filterData = this.items.filter((location) => {
        return location.marathiname.toLowerCase().indexOf(searchvalue.toLowerCase()) > -1;
      });
    }

    
  }



}
