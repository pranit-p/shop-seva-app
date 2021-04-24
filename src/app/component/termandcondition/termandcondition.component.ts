import { Component, OnInit } from '@angular/core';
import { Globalconstant } from './../../class/globalconstant';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-termandcondition',
  templateUrl: './termandcondition.component.html',
  styleUrls: ['./termandcondition.component.scss'],
})
export class TermandconditionComponent implements OnInit {

  languageId=Globalconstant.LanguageID;
  constructor(public menuCtrl: MenuController) { }

  ngOnInit() 
  {
    this.menuCtrl.enable(false);

  }

}
