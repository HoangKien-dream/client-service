import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
categories:any
  name:any
  price:any
  thumbnail:any
  description:any
  quantity:any
  categoryId = 0;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  this.getCategory()
  }
getCategory(){
    this.productService.getCategory()
      .subscribe({
        next:(res)=>{
          this.categories = res;
          console.log(res)
        },
        error:(e)=>console.error(e)
      })
}

  save() {
    var data={
      name:this.name,
      price:this.price,
      thumbnail:this.thumbnail,
      description:this.description,
      quantity:this.quantity,
      categoryId:this.categoryId
    }
    this.productService.save(data)
      .subscribe({
        next:(res)=>{
          console.log(res)
        },
        error:(e)=>console.error(e)
      })
  }
}
