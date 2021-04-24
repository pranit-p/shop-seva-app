import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { TermandconditionComponent } from './component/termandcondition/termandcondition.component';
import { PrivacypolicyComponent } from './component/privacypolicy/privacypolicy.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { SearchComponent } from './component/search/search.component';
import { SettinggComponent } from './component/settingg/settingg.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'employeeservice',
    loadChildren: () => import('./page/employeeservice/employeeservice.module').then( m => m.EmployeeservicePageModule)
  },
  {
    path:"setting",
    component:SettinggComponent
  },
  {
    path:"forgetpassword",
    component:ForgetpasswordComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"privacypolicy",
    component:PrivacypolicyComponent
  },
  {
    path:"termandcondition",
    component:TermandconditionComponent
  },
  {
    path:"register",
    component:RegistrationComponent
  },
  {
    path: 'news',
    loadChildren: () => import('./page/news/news.module').then( m => m.NewsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
