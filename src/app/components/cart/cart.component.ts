import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service'
import { NzMessageService } from 'ng-zorro-antd/message';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  array?:any
  products?:any
  totalPrice=0;
  constructor(private orderService:OrderService,
              private message:NzMessageService,
              private router:Router) { }

  ngOnInit(): void {
    this.getCartItems()
  }
  getCartItems(){
    this.array = localStorage.getItem("carItem")
    this.products = JSON.parse(this.array)
    this.getTotalPrice()
  }
  delete(id:any) {
    this.products = this.products.filter((item: { id: any; }) => item.id !==id)
    localStorage.setItem("carItem",JSON.stringify(this.products))
    this.getTotalPrice()
    console.log(this.products)
  }
  getTotalPrice(){
    let total = 0
    for (let product of this.products) {
      total+=(product.price * product.amount);
    }
    this.totalPrice = total;
    console.log(this.totalPrice)
  }

  payment() {
    var data = {
      userId:1,
      orderDetails:[{
      }]
    }
    for (let product of this.products) {
      var  oder = {
        productId:product.id,
        quantity:product.amount
      }
       data.orderDetails.push(oder)
    }
    data.orderDetails.shift()
    this.orderService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message.success(`Đơn hàng ${res.id} của bạn đang đc xử lý`)
          localStorage.removeItem("carItem");
          localStorage.setItem("orderId",res.id);
          this.router.navigate(["/check-out"])
        },
        error: (e) => console.error(e)
      });
  }
}
