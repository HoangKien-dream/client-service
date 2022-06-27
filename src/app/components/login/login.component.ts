import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(private authen:AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    var data = {
      username:this.username,
      password:this.password
    }
    this.authen.login(data)
      .subscribe({
        next:(res) =>{
          console.log(res)
          localStorage.setItem("token-day-ne",res.accessToken)
          localStorage.setItem("username",res.username)
        },
        error:(e)=>console.error(e)
      })
  }
}
