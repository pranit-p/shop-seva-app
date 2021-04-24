import { Component, OnInit } from '@angular/core';
import { ProducttransactionService } from './../../service/producttransaction.service';
import Swal from 'sweetalert2';
import { Globalconstant } from './../../class/globalconstant';
@Component({
  selector: 'app-employeeservicelist',
  templateUrl: './employeeservicelist.component.html',
  styleUrls: ['./employeeservicelist.component.scss'],
})
export class EmployeeservicelistComponent implements OnInit {
  loaded=false;
  baseUrl=Globalconstant.webApi;
  servicelist:any;
  languageId=Globalconstant.LanguageID;
  constructor(private glosary:ProducttransactionService) { }

  ngOnInit() 
  {

    this. loaded=false;

    let response=this.glosary.getCategory(2);
    response.subscribe(res =>
     {
      this.servicelist=res['categorylist'];
       console.log(res);
       setTimeout(() => {        
        this.loaded=true;
      }, 1500);
     },
     err => 
     {
      
     
       
     });
  }

}
