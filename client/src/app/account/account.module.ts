import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Register} from './register/register';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    LoginComponent,
    Register
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }