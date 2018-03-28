import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component'
import { LoginComponentComponent } from './login-component/login-component.component';

import { MyGuardGuard } from './my-guard.guard';

const routes: Routes = [
  {
    path:'dasboard',
    component:DashboardComponentComponent,

    canActivate : [MyGuardGuard]

  },
  {
    path:'login',
    component:LoginComponentComponent

  },
  {
    path:'**',
    component:DashboardComponentComponent,
  

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
