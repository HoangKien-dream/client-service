import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {NzMessageService} from "ng-zorro-antd/message";
import {Router, RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientService';
  information:any;
  constructor(private authentication: AuthenticationService,
              private message:NzMessageService ,
              private  router:Router) {
  }

  ngOnInit(): void {
    this.getInformation()
  }
  getInformation(){
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

  logOut() {
    localStorage.clear()
    this.router.navigate(['login']).then(()=>{
      this.message.success("Đăng xuất thành công")
      window.location.reload()
    })
  }
}
