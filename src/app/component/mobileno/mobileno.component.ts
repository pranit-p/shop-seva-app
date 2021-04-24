import { UsertransactionService } from './../../service/usertransaction.service';
import { TranslateConfigService } from './../../service/translate-config.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../service/storage.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as $ from "jquery";
import { MenuController } from '@ionic/angular';

import { NavController  } from '@ionic/angular';
import { Globalconstant } from './../../class/globalconstant';
@Component({
  selector: 'app-mobileno',
  templateUrl: './mobileno.component.html',
  styleUrls: ['./mobileno.component.scss'],
})
export class MobilenoComponent implements OnInit 
{
  selectedLanguage:string;
  languageid=Globalconstant.LanguageID;

  constructor(private user:UsertransactionService,private router: Router,private translateConfigService: TranslateConfigService,private storage: StorageService,public menuCtrl: MenuController,public navCtrl: NavController) 
  {  //this.translateConfigService.setLanguage('en');
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }


  ngOnInit() 
  {
    this.languageid=Globalconstant.LanguageID;
    this.menuCtrl.enable(false);

  }
 

  loginTomyaccount()
  {
    var mobileno=$('#mobileno').val();
    var password=$('#password').val();


    if(mobileno=="" || password=="")
    {
      if(Globalconstant.LanguageID=="1")
          {
            var confirmmsg="Oops...";
            var resultmsg="Invalid mobile number and password";
          }
          else
          {
            var confirmmsg="अरेरे...";
            var resultmsg="अवैध मोबाइल नंबर आणि संकेतशब्द";
          }
          Swal.fire({
            icon: 'error',
            title: confirmmsg,
            backdrop: 'rgb(255 230 192)',
            allowOutsideClick: false,
            text: resultmsg,
            showConfirmButton: false,
            timer: 2000
          });
    }
    else
    {
      let response=this.user.verifyUser(mobileno,password);
      response.subscribe(res =>
      {
        
          if (res['IsLogin'] == 1) 
          {
            
            this.storage.set('CustID', res['Userinfo'][0]['CustID']).then(result => {
              Globalconstant.CustID=res['Userinfo'][0]['CustID'];
              $('#mobileno').val('');
              $('#password').val('');

              var hrader="";
              var body="";
              
              if(Globalconstant.LanguageID=="1")
              {
                hrader="Welcome";
                body="Login successfull. please wait......";
              }
              else
              {
                hrader="स्वागत आहे";
                body="पुष्टीकरण यशस्वी. कृपया थांबा......";
              }

              Swal.fire({
                icon: 'success',
                title: hrader,
                backdrop: 'rgb(211 187 255)',
                allowOutsideClick: false,
                text: body,
                showConfirmButton: false,
                  timer: 2000
                });	
      


              this.navCtrl.navigateRoot('/news');

              }).catch(e => {
              console.log("error: " + e);
              });
          }
          else 
          {

            if(Globalconstant.LanguageID=="1")
            {
              var confirmmsg="Oops...";
              var resultmsg="Invalid mobile number and password";
            }
            else
            {
              var confirmmsg="अरेरे...";
              var resultmsg="अवैध मोबाइल नंबर आणि संकेतशब्द";
            }
            Swal.fire({
              icon: 'error',
              title: confirmmsg,
              backdrop: 'rgb(255 230 192)',
              allowOutsideClick: false,
              text: resultmsg,
              showConfirmButton: false,
              timer: 2000
            });
          }
      
        
      },
     err => 
     {});
    }

  }

}
