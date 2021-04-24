import { GaonComponent } from './../../component/gaon/gaon.component';

import { MobilenoComponent } from './../../component/mobileno/mobileno.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage,GaonComponent,
    MobilenoComponent

  ]
})
export class LoginPageModule {}
