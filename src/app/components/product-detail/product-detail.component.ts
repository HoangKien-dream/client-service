import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:any
  amount=1;
  carItem: any = []
  constructor(private productService:ProductService,
              private route:ActivatedRoute,
              private message:NzMessageService) { }

  ngOnInit(): void {
  this.getProduct(this.route.snapshot.params["id"])
  }

  getProduct(id:any){
    this.productService.get(id)
      .subscribe({
        next:(res)=>{
          this.product = res
          this.product.forEach((a:any)=>{
            Object.assign(a,{amount:1})
          })
          // this.product.assign({amount:1})
          console.log(this.product)
        },
        error:(e)=>console.log(e)
      })
  }

  addToCart(product:any) {
    product.amount = this.amount
    this.message.success("Thêm sản phẩm thành công")
    var listProduct =localStorage.getItem("carItem");
    if (listProduct!=null){
      this.carItem = JSON.parse(listProduct)
      let productsExist = false;
      for (let i in this.carItem) {
        if (this.carItem[i].id === product.id) {
          this.carItem[i].amount++;
          productsExist = true;
        }
      }
      if (!productsExist) {
        this.carItem.push(product);
      }
      localStorage.setItem("carItem", JSON.stringify(this.carItem))
      console.log(this.carItem)
    }
    else {
      localStorage.setItem("carItem", JSON.stringify(this.carItem))
      console.log(this.carItem)
    }
  }
}
