import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Register } from './register/register';

const routes: Routes = [
  {path: 'login', component: LoginComponent, data:{breadcrumb: 'Login'}},
  {path: 'register', component: Register, data:{breadcrumb: 'Register'}}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AccountRoutingModule { }