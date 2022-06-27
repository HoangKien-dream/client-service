import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../../services/payment.service'
import {OrderService} from '../../services/order.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  wallet:any
  history:any
  constructor(private paymentService:PaymentService,
              private orderService:OrderService,
              private message:NzMessageService) { }

  ngOnInit(): void {
    this.getWallet()
    this.getHistory()
    const id = localStorage.getItem("orderId")
    if (id != null){
      this.notification(id);
    }
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
notification(id:any){
    this.orderService.findById(id)
      .subscribe({
        next:(res)=>{
          if (res.orderStatus == "DONE"){
              this.message.success(`Đơn hàng ${res.id} được thanh toán thành công` );
              localStorage.clear();
              return;
          }
          if (res.orderStatus == "CANCEL" && res.inventoryStatus == "OUT_OF_STOCK"){
            this.message.error("Đơn hàng của bạn bị thiếu hàng ")
            return;
          }
          if (res.orderStatus == "CANCEL" && res.inventoryStatus == "NOT_ENOUGH_BALANCE"){
            this.message.error("Đơn hàng của bạn bị thiếu tiền ")
            return;
          }
        }
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
