import { Component, OnInit } from '@angular/core';
import { UsertransactionService } from './../../service/usertransaction.service';
import { StorageService } from './../../service/storage.service';

import { MenuController } from '@ionic/angular';

import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';
  import { TranslateConfigService } from './../../service/translate-config.service';
  
import { Globalconstant } from './../../class/globalconstant';
import Swal from 'sweetalert2';
import * as $ from "jquery";
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit 
{
  mobileno;
  fullname;
  password;
  selectedLanguage:string;
  otpformessage;
  closebuttontext:string;
  constructor(private translateConfigService: TranslateConfigService,private user:UsertransactionService,private modalController: ModalController,private navparams:NavParams,private storage: StorageService,public menuCtrl: MenuController) { }

  ngOnInit() 
  {
    this.menuCtrl.enable(false);

    if(Globalconstant.LanguageID=="1")
    {
      this.closebuttontext="back";
    }
    else
    {
      this.closebuttontext="मागे";
    }
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.fullname=this.navparams.data.fullname;
    this.mobileno=this.navparams.data.mobileno;
    this.password=this.navparams.data.password;
    
    let response=this.user.sendSms(this.mobileno);
    response.subscribe(res =>
     {
      var hrader="";
      var body="";

      if(Globalconstant.LanguageID=="1")
      {
        body='Otp sended to your mobile number';
      }
      else
      {
        body="तुमच्या मोबाईल नंबरवर ओ.टी.पी. पाठवलेला आहे";
      }


      Swal.fire({
        icon: 'success',
        backdrop: 'rgb(211 187 255)',
        allowOutsideClick: false,
        text: body,
        showConfirmButton: false,
          timer: 2000
        });	




       console.log(res);
      this.otpformessage=res;
     },
     err => {
     
     });
  }

  closemodelforchange()
  {
    this.close("0");
  }


  async close(r) 
  {
    const onClosedData: string = r;
    await this.modalController.dismiss(onClosedData);
  }
  removeerr()
  {
    $('#otp_error').html('');
  }

  verifyOtp() 
  {
    var enteredotp=$('#otp').val();

    var englishtresultmessage="";
    var marathitresultmessage="";
    
    if(enteredotp=="")
    {
      englishtresultmessage="otp should not be blank";
      marathitresultmessage="ओटीपी रिक्त नसावे";
      if(Globalconstant.LanguageID=="1")
      {
        $('#otp_error').html(englishtresultmessage);
      }
      else
      {
        $('#otp_error').html(marathitresultmessage);
      }
    }
    else
    {
      if(this.otpformessage==enteredotp)
      {
        let response=this.user.createCustomer(this.fullname,this.mobileno,this.password,Globalconstant.goanid);
        response.subscribe(res =>
         {
            

          if (res['IsLogin'] == 1) 
          {
            
            
            this.storage.set('CustID', res['Userinfo']).then(result => {
              Globalconstant.CustID=res['Userinfo'];
              this.close("1");
              }).catch(e => {
              console.log("error: " + e);
              });
          }
          


          
         },
         err => {
        
         });
      }
      else
      {
        englishtresultmessage="otp does not match";
        marathitresultmessage="ओटीपी जुळत नाही";
        if(Globalconstant.LanguageID=="1")
      {
        $('#otp_error').html(englishtresultmessage);
      }
      else
      {
        $('#otp_error').html(marathitresultmessage);
      }
       
      }
    }
     
  }



}
