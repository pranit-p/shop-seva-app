import { Globalconstant } from './../../class/globalconstant';
import Swal from 'sweetalert2';

import * as $ from "jquery";
import { Router } from '@angular/router';

import { StorageService } from './../../service/storage.service';
import { GaonComponent } from './../../component/gaon/gaon.component';
import { TranslateConfigService } from './../../service/translate-config.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit 
{
 
  constructor(private router: Router,public modalController: ModalController,private storage:StorageService,private translateConfigService: TranslateConfigService) { }

  ngOnInit() 
  {
    this.storage.get('LanguageID').then(result => {
      if (result == null || result == '') 
      {
        this.languageselection();
      }
      else
      { 
        if (result=="1") 
        {
           Globalconstant.LanguageID='1';
          this.translateConfigService.setLanguage('en');
  
        }
        else
        {
          Globalconstant.LanguageID='2';
          this.translateConfigService.setLanguage('ma');
        }
      }
      }).catch(e => {

      });




      this.storage.get('GaonID').then(result => {
        if (result == null || result == '') 
        {
          this.openModal();
        }
        else
        { 
          
        }
        }).catch(e => {
  
        });






      this.storage.get('CustID').then(result => {
        if (result != null && result != '') 
        {
          Globalconstant.CustID=result;
          this.router.navigateByUrl('/news');
          
        }
        else
        {
          
        }
        }).catch(e => {
        console.log('error: '+ e);
        // Handle errors here
        });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: GaonComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) 
      {
        
      }
    });

    return await modal.present();
  }

  languageselection()
  {
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

      }
      else
      {
        this.storage.set('LanguageID', '2');
        Globalconstant.LanguageID='2';
        this.translateConfigService.setLanguage('ma');
      }
    });

  }

}
