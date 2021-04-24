import { Component, OnInit } from '@angular/core';
import { ProducttransactionService } from './../../service/producttransaction.service';
import Swal from 'sweetalert2';
import * as $ from "jquery";
import { Globalconstant } from './../../class/globalconstant';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss'],
})
export class CategorylistComponent implements OnInit 
{
  baseUrl=Globalconstant.webApi;
  categoryList:any;
  loaded=false;
  languageId=Globalconstant.LanguageID;
  constructor(private glosary:ProducttransactionService) 
  { 

  }

  ngOnInit() 
  {
    this.languageId=Globalconstant.LanguageID;
    console.log(this.languageId);

    this.loaded=false;
    let response=this.glosary.getCategory(1);
    response.subscribe(res =>
     {
      this.categoryList=res['categorylist'];
       console.log(res);
       setTimeout(() => {        
        this.loaded=true;
      }, 1500);
     },
     err => {
       

  



     });
  }

}
