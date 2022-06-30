import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service'
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any;
  carItem: any = []
  page = 1;
  size = 3;
  total?: any
  keyword = "";
  categoryId = 0;
  intPrice:any;
  startPrice=0
  endPrice=0
  categorise:any

  constructor(private productService: ProductService,
              private message:NzMessageService ) {
  }

  ngOnInit(): void {
    this.getCategory()
    this.getAll()
  }

  getCategory(){
    this.productService.getCategory()
      .subscribe({
        next:(res) =>{
          this.categorise = res
          console.log(res)
    },
        error:(e)=>console.error(e)
      })
  }

  getAll() {
    this.productService.getAll(this.page,this.size,this.keyword,this.categoryId,this.startPrice,this.endPrice)
      .subscribe({
        next: (res) => {
          this.page = res.pageable.pageNumber + 1;
          this.total = res.totalElements;
          this.products = res.content;
          this.products.forEach((a:any)=>{
            Object.assign(a,{amount:1})
          })
          console.log(this.products)
        },
        error: (e) => console.error(e)
      });
  }

  addToCart(product: any) {
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

  handlePageChange(event: number) {
    this.page = event;
    this.getAll()
  }

  search() {
    this.getAll()
  switch (this.intPrice){
    case "0":
      this.getAll()
      break;
    case "1":
      this.startPrice =10000000;
      this.endPrice = 30000000;
      this.getAll()
      break;
    case "2":
      this.startPrice =30000000;
      this.endPrice = 60000000;
      this.getAll()
      break;
    case "3":
      this.startPrice =60000000;
      this.endPrice = 100000000;
      this.getAll()
      break;
  }
  }

  clear(){
    this.intPrice = 0;
    this.categoryId = 0;
    this.keyword = ""
  }
}
