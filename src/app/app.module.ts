import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyGuardGuard } from './my-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
