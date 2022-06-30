import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  roles:any
  permissions:any
  isVisible = false;
  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.authentication.getRole()
      .subscribe({
        next:(res)=>{
          this.roles = res;
          console.log(this.roles)
    },
        error:(e)=>console.log(e)
      })
  }

  showModal(event?: any): void {
    this.permissions = event;
    console.log(this.permissions)
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
