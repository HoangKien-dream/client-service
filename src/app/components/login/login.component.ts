import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {Router, RouterModule, Routes} from '@angular/router';
import {NzMessageService} from "ng-zorro-antd/message";
import {window} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(private authen:AuthenticationService,
              private message:NzMessageService,
              private router:Router) { }

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
          localStorage.setItem("username",res.username);
          location.reload()
          this.router.navigate(['profile']).then(()=>{
            this.message.success("Đăng nhập thành công")
            location.reload()
            }
          )
        },
        error:(e)=>console.error(e)
      })
  }
}
