import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProducttransactionService } from './../../service/producttransaction.service';
import { Globalconstant } from './../../class/globalconstant';
import Swal from 'sweetalert2';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss'],
})
export class EmployeelistComponent implements OnInit 
{
  baseUrl=Globalconstant.webApi;
  loaded=false;
  languageId=Globalconstant.LanguageID;
  CategoryID;
  employeelist:any;
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
    this.CategoryID=this.activeRoute.snapshot.paramMap.get('serviceID'); 

    let response=this.glosary.getShopList(this.CategoryID,2);
    response.subscribe(res =>
     {
      this.employeelist=res['shoplist'];
      setTimeout(() => {        
        this.loaded=true;
      }, 1500);
     },
     err => 
     {
      
     });
  }

}
