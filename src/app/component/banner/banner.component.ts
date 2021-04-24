import { ProducttransactionService } from './../../service/producttransaction.service';
import { Component, OnInit } from '@angular/core';
import { Globalconstant } from './../../class/globalconstant';

import { Router } from '@angular/router';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit 
{

  

  loaded=false;
  baseUrl=Globalconstant.webApi;
  bannerList:any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }


  };

  gotoshop(bannerid)
  {
    if(bannerid!=0 && bannerid!="0" && bannerid!=undefined)
    {
      this.router.navigateByUrl('home/shopdetail/'+bannerid);
    }
  }
  
  constructor(private glosary:ProducttransactionService,private router: Router) 
  { 
    
  }

  ngOnInit() 
  {
    this.loaded=false;
    let response=this.glosary.getBannerImage();
    response.subscribe(res =>
     {
       this.bannerList=res['bannerImage'];
       setTimeout(() => {        
        this.loaded=true;
      }, 1500);
     },
     err => {
       
     
     });
  }
}
