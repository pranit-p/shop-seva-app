import { Component, OnInit } from '@angular/core';
import { Globalconstant } from './../../class/globalconstant';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.scss'],
})
export class PrivacypolicyComponent implements OnInit {

  languageId=Globalconstant.LanguageID;
  constructor(public menuCtrl: MenuController) { }

  ngOnInit() 
  {
    this.menuCtrl.enable(false);


  }

}
