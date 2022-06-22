import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../../services/payment.service'

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  wallet:any
  history:any
  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.getWallet()
    this.getHistory()
  }
getWallet(){
    this.paymentService.getWallet()
      .subscribe({
        next:(res)=>{
          this.wallet = res;
          console.log(this.wallet)
        },
        error:(e)=>console.error(e)
      })
}

getHistory(){
    this.paymentService.getHistory()
      .subscribe({
        next:(res)=>{
          this.history = res;
          console.log(this.history)
        },
        error:(e)=>console.error(e)
      })
}

}
