import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'create-account',component:CreateAccountComponent},
  {path:'main',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
