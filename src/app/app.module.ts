import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TimerComponent } from './timer/timer.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

import { Uppercase } from './pipes/uppercase.pipe';

import { FormsModule } from '@angular/forms';
import { FromNowPipe } from './pipes/from-now.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ Uppercase, AppComponent, UserComponent, TimerComponent, LoginComponent, NavbarComponent, AlertComponent, UserFormComponent, UserListComponent, FromNowPipe ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
