import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import * as bootstrap from "bootstrap";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email = '';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  loginSuccess = false;

  constructor( private route:Router, private cService:CustomerService ) { }

  ngOnInit(): void {
   
  }

  loginForm(){
    $(document).ready(function() {             
      $('#loginModal').modal('show');
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
      });
     
  }
  checkLogin() {
    let customer = { "email": this.email, "password": this.password};
    console.log(customer);

    this.cService.login(customer).subscribe((response) => {
      console.log(response);

      if (response) {
        this.route.navigate(['']);

        sessionStorage.setItem('email', this.email);
    
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      } else {
        this.invalidLogin = true;
      }
    });

    this.loginSuccess = false;
    
  }
}