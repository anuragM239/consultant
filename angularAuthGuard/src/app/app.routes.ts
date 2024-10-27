import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { HomeComponent } from '../components/home/home.component';
import { MainpageComponent } from '../components/mainpage/mainpage.component';
import { MainloginComponent } from '../components/mainlogin/mainlogin.component';
import { AdminloginComponent } from '../components/logins/adminlogin/adminlogin.component';
import { ClientloginComponent } from '../components/logins/clientlogin/clientlogin.component';
import { ConsultantloginComponent } from '../components/logins/consultantlogin/consultantlogin.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ClientComponent } from '../components/client/client.component';
import { AuthorizationService } from '../services/authorization.service';

export const routes: Routes = [
    { path: 'mainlogin', component: MainloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path: 'mainpage', component:MainpageComponent},
  {path: 'adminlogin', component:AdminloginComponent},
  {path: 'clientlogin', component:ClientloginComponent},
  {path: 'consultantlogin', component:ConsultantloginComponent, canActivate: [AuthorizationService]},
  {path:'admin', component:AdminComponent, canActivate: [AuthorizationService]},
  {path:'client', component:ClientComponent, canActivate: [AuthorizationService]},
  { path: 'mainpage', redirectTo: '/mainpage', pathMatch: 'full' },
  {path:'register',redirectTo: '/mainlogin',pathMatch: 'full'},
];
