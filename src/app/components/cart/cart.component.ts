import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service'
import { NzMessageService } from 'ng-zorro-antd/message';

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
              private message:NzMessageService) { }

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
          if (res != null){
            this.message.success(`Đơn hàng ${res.id} của bạn đang đc xử lý`)
            window.location.reload()
          }
          else {
            this.message.error("Đơn hàng bạn của bạn đang bị lỗi")
          }
          localStorage.clear();
        },
        error: (e) => console.error(e)
      });

  }
}
