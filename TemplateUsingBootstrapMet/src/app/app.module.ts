import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { TableListComponent } from './Components/table-list/table-list.component';
import { TypoComponent } from './Components/typo/typo.component';
import { IconsComponent } from './Components/icons/icons.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypoComponent,
    IconsComponent,
    NotificationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
