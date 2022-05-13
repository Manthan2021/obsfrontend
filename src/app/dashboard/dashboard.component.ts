import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  uniqueID:any;
  user: any;
  constructor(private route: Router, private cService: CustomerService) {

  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('email');
  }

  passbook() {
    this.route.navigate(['/passbook']);
  }

  sendmoney() {
    this.route.navigate(['/sendmoney']);
  }

  getUserId() {
    this.cService.getUid(this.user)
      .subscribe(data =>{
        this.uniqueID=data;
        sessionStorage.setItem('uid',this.uniqueID);
      }
      , error => console.log(error));
   

  }


}
