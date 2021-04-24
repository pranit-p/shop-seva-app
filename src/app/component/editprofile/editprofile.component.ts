import { Component, OnInit } from '@angular/core';
import { Globalconstant } from './../../class/globalconstant';
import { UsertransactionService } from './../../service/usertransaction.service';
import * as $ from "jquery";
import { TranslateConfigService } from './../../service/translate-config.service';
import Swal from 'sweetalert2';
import { MenuController } from '@ionic/angular';

import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
})
export class EditprofileComponent implements OnInit {
  selectedLanguage:string;
  editoffullname;
  editofmobileno;
  editofpassword;
  Updatebun;
  closebtn;
  constructor(private translateConfigService: TranslateConfigService,private user:UsertransactionService,private modalController: ModalController,private navparams:NavParams,public menuCtrl: MenuController) { }

  ngOnInit() 
  {
    this.menuCtrl.enable(false);
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.editoffullname=this.navparams.data.fullname;
    this.editofmobileno=this.navparams.data.mobileno;
    this.editofpassword=this.navparams.data.password;
    $('#editfullname').val(this.editoffullname);
  
    $('#editpasswordofregister').val(this.editofpassword);
    $('#editconfirmpassword').val(this.editofpassword);
    if(Globalconstant.LanguageID=="1")
    {
      this.Updatebun="Update";
      this.closebtn="back";
    }
    else
    {
      this.closebtn="मागे";
      this.Updatebun="सुधारित करा";
    }

  }
  async closemodelforchange()
  {
    await this.modalController.dismiss();
  }

  removeerror(id)
  {
    $(id+'_error').html('');
    $('.errormessage').html('');
  }
  editnext() 
  {  
    var fullname=$('#editfullname').val();
    var password=$('#editpasswordofregister').val();
    var confirmpassword=$('#editconfirmpassword').val();

    var status1=true,status2=true,status3=true,status4=true;

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
      $('#editfullname_error').html(englishfullnameerrormsg);     
      $('#editpassword_error').html(englishpassworderrormsg);      
      $('#editconfirmpassword_error').html(englishconfirmpassworderrormsg);      

    }
    else
    {
      $('#editfullname_error').html(marathifullnameerrormsg);     
      $('#editpassword_error').html(marathipassworderrormsg);      
      $('#editconfirmpassword_error').html(marathiconfirmpassworderrormsg);      

    }

    if(status1==true && status2==true && status3==true && status4==true)
    {
      

      let response=this.user.updateCustomer(fullname,password);
      response.subscribe(res =>
       {
          if(res=="1")
          {
            var dismsg="";

            if(Globalconstant.LanguageID=="1")
            {
              dismsg="Updated successfully";
            }
            else
            {
              dismsg="सुधारित झाले";
            }

            Swal.fire({
              icon: 'success',
              backdrop: 'rgb(211 187 255)',
              allowOutsideClick: false,
              text: dismsg,
              showConfirmButton: false,
                timer: 2000
              });	
              this.closemodelforchange();
          }
          else
          {
            //alert("Not successfully");
          }

        console.log(res);        
       },
       err => {
      
       });

    }
    else
    {
      
    }


    
  }


}
