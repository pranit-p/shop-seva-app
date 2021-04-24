import { Component, OnInit } from '@angular/core';
import { Globalconstant } from './../../class/globalconstant';
import Swal from 'sweetalert2';
import * as $ from "jquery";
import { MenuController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';
import { TranslateConfigService } from './../../service/translate-config.service';
import { UsertransactionService } from './../../service/usertransaction.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent implements OnInit 
{
  selectedLanguage:string;
  reurnotp:string;
  fmobilenumber:string;
  constructor(private translateConfigService: TranslateConfigService,public navCtrl: NavController,private user:UsertransactionService,public menuCtrl: MenuController) { }

  ngOnInit() 
  {

    this.menuCtrl.enable(false);
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  removeerr()
  {
    $('.errormessage').html('');
  }

  chagemobilenumber()
  {
    $('#fmobileno').val('');
    $('#fotp').val('');
    $('#fpassword').val('');
    $('#fconfirmpassword').val('');
    


    $('.fotpdiv').hide();
    $('.fpassworddiv').hide();
    $('.fmobilenodiv').show();
  }

  fverifypassword()
  {
    var password=$('#fpassword').val();
    var confirmpassword=$('#fconfirmpassword').val();
    var englishpassworderrormsg='';
    var marathipassworderrormsg='';
    var status3=true,status4=true;

    var englishconfirmpassworderrormsg='';
    var marathiconfirmpassworderrormsg='';
    if(password=="")
    {
      englishpassworderrormsg="Password should not be blank";
      marathipassworderrormsg="संकेतशब्द रिक्त असू नये";
      status3=false;
    }
    else
    {
      englishpassworderrormsg="";
      marathipassworderrormsg="";
      status3=true;
  
    }
    if(confirmpassword!=password)
    {
      englishconfirmpassworderrormsg="password not match";
      marathiconfirmpassworderrormsg="संकेतशब्द जुळत नाही";
      status4=false;
      
    }
    else
    {
      englishconfirmpassworderrormsg="";
      marathiconfirmpassworderrormsg="";
      status4=true;
  
    }
    if(Globalconstant.LanguageID=="1")
    {
      $('#fpassword_error').html(englishpassworderrormsg);      
      $('#fconfirmpassword_error').html(englishconfirmpassworderrormsg);      

    }
    else
    {
      $('#fpassword_error').html(marathipassworderrormsg);      
      $('#fconfirmpassword_error').html(marathiconfirmpassworderrormsg);      

    }
    if(status4==true && status3==true)
    {
      let response=this.user.fsavepassword(password,this.fmobilenumber);
      response.subscribe(res =>
       {
         console.log(res);
         if(res==1)
         {
          var hrader="";
        var body="";
        
        if(Globalconstant.LanguageID=="1")
        {
          hrader="congratulations";
          body='password changed successfully';
        }
        else
        {
          hrader="अभिनंदन";
          body="संकेतशब्द यशस्वीरित्या बदलला";
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
         }
         
         this.navCtrl.navigateRoot('/login');
      
       },
       err => {
      
       });
    }

  }


  fverifyotp()
  {
    var otp=$('#fotp').val();
    if(this.reurnotp==otp)
    {



        $('.fotpdiv').hide();
        $('.fpassworddiv').show();
        $('.fmobilenodiv').hide();
    }
    else
    {
      var hrader="";
      var body="";
        if(Globalconstant.LanguageID=="1")
        {
          hrader="Oops";
          body='Invalid Otp';
        }
        else
        {
          hrader="अरेरे";
          body="अवैध ओ.पी.पी.";
        }


        Swal.fire({
          icon: 'error',
          title: hrader,
          backdrop: 'rgb(211 187 255)',
          allowOutsideClick: false,
          text: body,
          showConfirmButton: false,
            timer: 2000
          });
    }
  }





  fverifyUser()
  {
    var mobileno=$('#fmobileno').val();


    let response=this.user.fverifyusermobilenumber(mobileno);
    response.subscribe(res =>
     {
       console.log(res);
       if(res==-1)
       {
        var hrader="";
        var body="";
          if(Globalconstant.LanguageID=="1")
          {
            hrader="Oops";
            body='Mobile number is not registred with us';
          }
          else
          {
            hrader="अरेरे";
            body="मोबाइल नंबर आधीपासून आमच्याकडे नोंदणीकृत नाही";
          }


          Swal.fire({
            icon: 'error',
            title: hrader,
            backdrop: 'rgb(211 187 255)',
            allowOutsideClick: false,
            text: body,
            showConfirmButton: false,
              timer: 2000
            });
       }
       else
       {

        this.fmobilenumber=mobileno;
        this.reurnotp=res+"";
        $('.fotpdiv').show();
        $('.fpassworddiv').hide();
        $('.fmobilenodiv').hide();
        
       }
    
     },
     err => {
    
     });




  }

}
