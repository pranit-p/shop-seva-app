import { GaonComponent } from './../gaon/gaon.component';
import { UsertransactionService } from './../../service/usertransaction.service';
import { TranslateConfigService } from './../../service/translate-config.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../service/storage.service';
import Swal from 'sweetalert2';
import { MenuController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import * as $ from "jquery";
import { Globalconstant } from './../../class/globalconstant';
import { EditprofileComponent } from '../editprofile/editprofile.component';
@Component({
  selector: 'app-settingg',
  templateUrl: './settingg.component.html',
  styleUrls: ['./settingg.component.scss'],
})
export class SettinggComponent implements OnInit {

  loaded=false;
  EntityID=Globalconstant.CustID;
  Name:string;
  mobileno:string;
  Editbtn:string;
  Settinglabel:string;
  Passwordofre:string;
  setting1:string;
  setting2:string;
  setting3:string;
  setting4:string;
  constructor(public modalController: ModalController,private translateConfigService: TranslateConfigService,private storage: StorageService,private user:UsertransactionService,public menuCtrl: MenuController) { }

  ionViewLoaded() {

    this.menuCtrl.enable(true);

 }
 ngAfterViewInit()
 {
   this.menuCtrl.enable(true);

 }
 ionViewDidEnter()
 {
  this.menuCtrl.enable(true);
 }
  ngOnInit() 
  {
    this.menuCtrl.enable(true);
    if(Globalconstant.LanguageID=="1")
    {
      this.Editbtn="Edit";
      this.Settinglabel="SETTINGS";
      this.setting1="Change language";
      this.setting2="Change city";
      this.setting3="About us";
      this.setting4="Privacy policy";
    }
    else
    {
      this.setting1="भाषा बदला";
      this.setting2="शहर बदला";
      this.setting3="आमच्याबद्दल";
      this.setting4="गोपनीयता धोरण";
      this.Settinglabel="सेटिंग";
      this.Editbtn="सुधारणे";
    }

    this.loaded=true;

    let response=this.user.getProfileData(this.EntityID);
    response.subscribe(res =>
     {
      
      this.Name=res['profiledata'][0]['CustName'];
      this.mobileno=res['profiledata'][0]['CustMobileNo'];
      this.Passwordofre=res['profiledata'][0]['Password'];

      console.log(res);
      setTimeout(() => {        
        this.loaded=true;
      }, 1500);

     },
     err => 
     {

     });
  }
  changegaon()
  {
    this.openModal();
  } 
  async openModal() {
    const modal = await this.modalController.create({
      component: GaonComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.menuCtrl.enable(true);
        //this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    this.menuCtrl.enable(true);
    return await modal.present();
  }


  async openeditprodile() {
    const modal = await this.modalController.create({
      component: EditprofileComponent,
      componentProps: {
        "fullname": this.Name,
        "mobileno": this.mobileno,
        "password": this.Passwordofre
      }

    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        //this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
      this.menuCtrl.enable(true);
      this.ngOnInit();
    });

    return await modal.present();
    this.menuCtrl.enable(true);
  }


  changelanguage()
  {
    $('#mobilenumber').focus();
 
    Swal.fire({
      title: 'Language',
      text: "Choose your language / आपली भाषा निवडा",
      icon: 'info',
      showCancelButton: true,
      backdrop: 'rgb(255 230 192)',
      allowOutsideClick: false,
      confirmButtonColor: 'rgb(151 141 255)',
     
      cancelButtonColor: 'rgb(253 105 155)',
      
      
      confirmButtonText: 'English ',
      cancelButtonText: 'मराठी',

    }).then((result) => {
      if (result.value) 
      {

        this.storage.set('LanguageID', '1');
        Globalconstant.LanguageID='1';
        this.translateConfigService.setLanguage('en');
        this.ngOnInit(); 
      }
      else
      {
        this.storage.set('LanguageID', '2');
        Globalconstant.LanguageID='2';
        this.translateConfigService.setLanguage('ma');
        this.ngOnInit(); 
      }
      
    });
  }
}
