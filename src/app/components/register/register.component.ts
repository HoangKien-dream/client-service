import { Component, OnInit } from '@angular/core';
import {format, formatISO} from 'date-fns';
import {AuthenticationService} from '../../services/authentication.service'
import {Router, RouterModule, Routes} from '@angular/router';
import {NzMessageService} from "ng-zorro-antd/message";
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  birthday?:any
  username?:any;
  thumbnail?:any;
  password?:any;
  confirmPass?:any;
  phone?:any;
  email?:any;
  address?:any;
  gender?:any;

  constructor(private authenService:AuthenticationService,
              private message:NzMessageService,
              private router:Router) { }

  ngOnInit(): void {
    console.log(this.gender)
  }

  change(result:any): void {
    this.birthday = format(result,"yyyy-MM-dd")
    console.log(this.birthday)
  }

  register() {
   var data={
     username:this.username,
     password:this.password,
     email:this.email,
     gender:this.gender,
     birthday:this.birthday,
     address:this.address,
     phone:this.phone,
     thumbnail:this.thumbnail
    }
    this.authenService.register(data)
      .subscribe({
         next:(res)=>{
          if (res != null){
            this.router.navigate(['login']).then(()=>{
              this.message.success("Đăng ký thành công")
            })
          }
          else {
            this.message.error("Đăng ký thất bại")
          }
         },
        error:(e)=>console.error(e)
      })


    console.log(data)
  }
}
