import { LoginComponent } from './Components/login/login.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { IconsComponent } from './Components/icons/icons.component';
import { TypoComponent } from './Components/typo/typo.component';
import { TableListComponent } from './Components/table-list/table-list.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'', pathMatch:'full',redirectTo:'dashboard'},
  {path:'dashboard',component:DashboardComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'table',component:TableListComponent},
  {path:'typo',component:TypoComponent},
  {path:'icon',component:IconsComponent},
  {path:'notification',component:NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
