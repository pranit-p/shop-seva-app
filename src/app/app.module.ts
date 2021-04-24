import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { PrivacypolicyComponent } from './component/privacypolicy/privacypolicy.component';
import { TermandconditionComponent } from './component/termandcondition/termandcondition.component';
import { SearchComponent } from './component/search/search.component';
import { SettinggComponent } from './component/settingg/settingg.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OtpComponent } from './component/otp/otp.component';
// import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Market } from '@ionic-native/market/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './service/translate-config.service';

import { RegistrationComponent } from './component/registration/registration.component';
import { IonicStorageModule } from '@ionic/storage';

import { CallNumber } from '@ionic-native/call-number/ngx';


import { Network } from '@ionic-native/network/ngx';
import { EditprofileComponent } from './component/editprofile/editprofile.component';


export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}



@NgModule({
  declarations: [AppComponent,SettinggComponent,SearchComponent,OtpComponent,RegistrationComponent,EditprofileComponent,TermandconditionComponent,PrivacypolicyComponent,AboutusComponent,ForgetpasswordComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,///SmsRetriever,
    SplashScreen,CallNumber,AppVersion,
    TranslateConfigService,Network,Market,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
