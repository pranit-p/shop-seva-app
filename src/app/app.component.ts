import { UsertransactionService } from './service/usertransaction.service';
import { Globalconstant } from './class/globalconstant';
import { TranslateConfigService } from './service/translate-config.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AppVersion } from '@ionic-native/app-version/ngx';
import { Market } from '@ionic-native/market/ngx';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from './service/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  selectedLanguage:string;
  constructor(
    private platform: Platform,private router: Router,private storage:StorageService,
    private translateConfigService: TranslateConfigService,private market: Market,private appVersion: AppVersion,
    private user:UsertransactionService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
 ///   alert(this.languageId);
    this.initializeApp();
    //private market: Market,private appVersion: AppVersion
  }
  initializeApp() 
  {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    

    let response=this.user.getVersion();
    response.subscribe(res =>
     {

      this.appVersion.getVersionCode().then(value => {
        
        if(value<res)
        {


          Swal.fire({
            title: 'Update is available',
            text: "please update",
            icon: 'info',
            showCancelButton: true,
            backdrop: 'rgb(255 230 192)',
            allowOutsideClick: false,
            confirmButtonColor: 'rgb(151 141 255)',
           
            cancelButtonColor: 'rgb(253 105 155)',
            
            
            confirmButtonText: 'Update ',
            cancelButtonText: 'Cancel',
      
          }).then((result) => {
            if (result.value) 
            {
              this.market.open("shopseva.com").then(response => 
                {
                  
                }).catch(error => {
                  
                });
            }
            else
            {
              
            }
          });
        }



      }).catch(err => {
        
      });

     },
     err => {
      
     });





    this.storage.get('CustID').then(result => {
      if (result != null && result != '') 
      {
        Globalconstant.CustID=result;
        
      }
      else
      {
        this.router.navigateByUrl('/login');
      }
      }).catch(e => {
      console.log('error: '+ e);
      // Handle errors here
      });
  }
 


  logoutfunction()
  {
    this.storage.set('CustID', '');
    this.router.navigateByUrl('/login');
  }


}
