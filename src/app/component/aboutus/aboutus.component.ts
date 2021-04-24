import { Component, OnInit } from '@angular/core';
import { Globalconstant } from './../../class/globalconstant';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent implements OnInit {
  languageId=Globalconstant.LanguageID;

  constructor(private callNumber: CallNumber,public menuCtrl: MenuController) { }

  ngOnInit() 
  {
    this.menuCtrl.enable(false);
  }
  callNow(number) 
  {
    //alert(number);
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
