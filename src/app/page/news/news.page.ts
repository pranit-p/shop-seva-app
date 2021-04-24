import { NewslistComponent } from './../../component/newslist/newslist.component';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Globalconstant } from './../../class/globalconstant';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit 
{

  @ViewChild(NewslistComponent) news: NewslistComponent ; 
  now = new Date();
  languageId=Globalconstant.LanguageID;


  constructor(public menuCtrl: MenuController) { }
  ionViewLoaded() {

    this.menuCtrl.enable(true);

 }
 doRefresh(event) 
 {
   //this.data=false;
   this.news.ngOnInit(); 
   setTimeout(() => 
   {
     event.target.complete();
   }, 2500);
 }

 ionViewDidEnter()
 {
  this.menuCtrl.enable(true);
 }
 ngAfterViewInit()
  {
    this.menuCtrl.enable(true);

  }
  ngOnInit() 
  {
    this.menuCtrl.enable(true);
    this.languageId=Globalconstant.LanguageID;
  }

}
