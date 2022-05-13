import { Component, OnInit } from '@angular/core';
import { AfterloginService } from '../afterlogin.service';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {

  transactions:Observable<Transaction[]>| any;
  
  constructor(private aService:AfterloginService) { }

 
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    const uid1=sessionStorage.getItem('uid');
    this.transactions=this.aService.getPassbook(uid1);
  }

}
