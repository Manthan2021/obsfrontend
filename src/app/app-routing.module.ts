import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PassbookComponent } from './passbook/passbook.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import { AdminTxnComponent } from './admin-txn/admin-txn.component';
import { AlertComponent } from './alert/alert.component';
import { AdminSendComponent } from './admin-send/admin-send.component';
import { AdminWithdrawComponent } from './admin-withdraw/admin-withdraw.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'createaccount', component:CreateaccountComponent},
  {path:'logout', component: LogoutComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'passbook', component:PassbookComponent},
  {path:'sendmoney', component:SendmoneyComponent},
  {path:'admintxn',component:AdminTxnComponent},
  {path:'alert',component:AlertComponent},
  {path:'sendby',component:AdminSendComponent},
  {path:'withdraw',component:AdminWithdrawComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
