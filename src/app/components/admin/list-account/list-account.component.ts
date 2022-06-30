import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import * as myGlobals from '../../../app.component';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  accounts:any;
  role:any;
  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
    this.getAccount()
  }

  getAccount(){
    this.authentication.getAccount()
      .subscribe({
        next:(res)=>{
          this.accounts =res
          console.log(res)
        },
        error:(e)=>console.error(e)
      })
  }
}
