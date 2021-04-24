import { StorageService } from './../../service/storage.service';
import { UsertransactionService } from './../../service/usertransaction.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as $ from "jquery";
import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';
  
import { MenuController } from '@ionic/angular';

import { Globalconstant } from './../../class/globalconstant';
@Component({
  selector: 'app-gaon',
  templateUrl: './gaon.component.html',
  styleUrls: ['./gaon.component.scss'],
})
export class GaonComponent implements OnInit 
{
  loaded=false;
  gaonlist;

  languageid=Globalconstant.LanguageID;
  constructor(private user:UsertransactionService,private modalController: ModalController,private storage:StorageService,public menuCtrl: MenuController) { }

  ngOnInit() 
  {
    this.menuCtrl.enable(false);

    this.loaded=false;
    let response=this.user.getgaonlist();
    response.subscribe(res =>
     {
       console.log(res);
       this.gaonlist=res['gaonlist'];
       setTimeout(() => {  

        this.loaded=true;
      }, 1500);
     },
     err => {
       alert(JSON.stringify(err));
       
      
     });
  }
  async closeModal() 
  {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  doRefresh(event) 
 {
   //this.data=false;
   this.ngOnInit(); 
   setTimeout(() => 
   {
     event.target.complete();
   }, 2500);
 }


  goanselected(id,status)
  {
    if(status=="1")
    { 
      this.storage.set('GaonID', id).then(result => {
        Globalconstant.goanid=id;
        }).catch(e => {
        console.log("error: " + e);
        });
        
        this.closeModal();
    }
    else
    {

      var hrader="";
      var body="";
      if(Globalconstant.LanguageID=="1")
      {
        hrader="Oops";
        body='Service not available';
      }
      else
      {
        hrader="माफी";
        body="सेवा उपलब्ध नाही";
      }

      Swal.fire({
        icon: 'info',
        title: hrader,
        backdrop: 'rgb(211 187 255)',
        allowOutsideClick: false,
        text: body,
        showConfirmButton: false,
          timer: 2000
        });	
    }
   
  }

}
