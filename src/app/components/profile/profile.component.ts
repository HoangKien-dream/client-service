import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
information:any
  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
  this.getInfor()
  }

  getInfor(){
    var username = localStorage.getItem("username");
    if (username != null){
      this.authentication.getInfor(username)
        .subscribe({
          next:(res)=>{
            this.information = res;
            console.log(this.information)
          },
          error:(e)=>console.error(e)
        })
    }
  }
}
