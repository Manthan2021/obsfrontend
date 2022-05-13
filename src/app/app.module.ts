import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateaccountComponent,
    LogoutComponent,
    DashboardComponent,
    PassbookComponent,
    SendmoneyComponent,
    AdminTxnComponent,
    AlertComponent,
    AdminSendComponent,
    AdminWithdrawComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
