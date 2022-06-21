import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service'

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

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.productService.getAll(this.page, this.size)
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
}
