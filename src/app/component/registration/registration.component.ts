import { Globalconstant } from './../../class/globalconstant';
import { UsertransactionService } from './../../service/usertransaction.service';
import { OtpComponent } from './../otp/otp.component';
import * as $ from "jquery";
import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from './../../service/translate-config.service';
import Swal from 'sweetalert2';
import { MenuController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit 
{

  selectedLanguage:string;
  constructor(private translateConfigService: TranslateConfigService,private router: Router,public modalController: ModalController,private user:UsertransactionService,public menuCtrl: MenuController,public navCtrl: NavController) { }

  ngOnInit() 
  {
    this.menuCtrl.enable(false);
    
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    

  }

  next() 
  {  
    var fullname=$('#fullname').val();
    var mobileno=$('#mobleno').val();
    var password=$('#passwordofregister').val();
    var confirmpassword=$('#confirmpassword').val();

    var status1=true,status2=true,status3=true,status4=true;

    var englishmobilenoerrormsg='';
    var marathimobilenoerrormsg='';
    var englishfullnameerrormsg='';
    var marathifullnameerrormsg='';
    var englishpassworderrormsg='';
    var marathipassworderrormsg='';
    var englishconfirmpassworderrormsg='';
    var marathiconfirmpassworderrormsg='';
    




    if(fullname=="")
    {
      englishfullnameerrormsg="Name should not be blank";
      marathifullnameerrormsg="नाव रिक्त असू नये";
      status1=false;
    }
    else
    {
        var p1=/^[A-Za-z\s]+$/; 
      if (fullname.match(p1)==null) 
      {
        englishfullnameerrormsg="Invalid name";
        marathifullnameerrormsg="नाव अवैध आहे";
        status1=false;
      } 
      else
      {
        englishfullnameerrormsg="";
        marathifullnameerrormsg="";
        status1=true;
      }
  
    }
    if(mobileno=="")
    {
      englishmobilenoerrormsg="Mobile no. should not be blank";
      marathimobilenoerrormsg="मोबाइल नंबर रिक्त असू नये";
      status2=false;
    }
    else
    {

        var p=/^[1-9]{1}[0-9]{9}$/; 
      if (mobileno.match(p)== null) 
      {
        englishmobilenoerrormsg="Invalid mobile number";
        marathimobilenoerrormsg="मोबाइल नंबर अवैध आहे";
        status2=false;
      } 
      else
      {
        englishmobilenoerrormsg="";
        marathimobilenoerrormsg="";
        status2=true;
      }
  
    }
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
      $('#fullname_error').html(englishfullnameerrormsg);      
      $('#mobleno_error').html(englishmobilenoerrormsg);      
      $('#password_error').html(englishpassworderrormsg);      
      $('#confirmpassword_error').html(englishconfirmpassworderrormsg);      

    }
    else
    {
      $('#fullname_error').html(marathifullnameerrormsg);      
      $('#mobleno_error').html(marathimobilenoerrormsg);      
      $('#password_error').html(marathipassworderrormsg);      
      $('#confirmpassword_error').html(marathiconfirmpassworderrormsg);      

    }

    if(status1==true && status2==true && status3==true && status4==true)
    {
      


      let response=this.user.verifyMobileNumber(mobileno);
      response.subscribe(res =>
       {
         console.log(res);
        if(res==0)
        {
          var hrader="";
          var body="";
            if(Globalconstant.LanguageID=="1")
            {
              hrader="Oops";
              body='Mobile number is already registred with us';
            }
            else
            {
              hrader="अरेरे";
              body="मोबाइल नंबर आधीपासून आमच्याकडे नोंदणीकृत आहे";
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
          this.openModal();
        }
       },
       err => {
      
       });





     
    }
    else
    {
      
    }


    
  }

  removeerror(id)
  {
    $(id+'_error').html('');
    $('.errormessage').html('');
  }

  
  async openModal() 
  { 
    var fullname=$('#fullname').val();
    var mobileno=$('#mobleno').val();
    var password=$('#passwordofregister').val();



    const modal = await this.modalController.create({
      component: OtpComponent,
      componentProps: {
        "fullname": fullname,
        "mobileno": mobileno,
        "password": password
      }
    });

    modal.onDidDismiss().then((dataReturned) => 
    {
      console.log(dataReturned.data);
      if (dataReturned.data == "1") 
      {
        var hrader="";
        var body="";
        
        if(Globalconstant.LanguageID=="1")
        {
          hrader="Welcome";
          body='Registration Successfully. please wait......';
        }
        else
        {
          hrader="स्वागत आहे";
          body="यशस्वीरित्या नोंदणी.कृपया थांबा......";
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


        $('#fullname').val('');
        $('#mobleno').val('');
        $('#password').val('');
        $('#confirmpassword').val('');
        this.navCtrl.navigateRoot('/news');
      }
    });

    return await modal.present();
  }




}
