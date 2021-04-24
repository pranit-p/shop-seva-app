import { Component, OnInit } from '@angular/core';
import { ProducttransactionService } from './../../service/producttransaction.service';
import { Globalconstant } from './../../class/globalconstant';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss'],
})
export class NewslistComponent implements OnInit 
{
  baseUrl=Globalconstant.webApi;
  newsList:any;
  loaded=false;
  languageId=Globalconstant.LanguageID;

  constructor(private glosary:ProducttransactionService) { }

  ngOnInit() 
  {
    this.languageId=Globalconstant.LanguageID;

    this.loaded=false;
    let response=this.glosary.getNews();
    response.subscribe(res =>
     {
      this.newsList=res['newslist'];
       console.log(res);
       setTimeout(() => {        
        this.loaded=true;
      }, 1500);
     },
     err => {  

     });
  }

}
