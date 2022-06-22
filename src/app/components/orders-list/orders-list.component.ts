import { Component, OnInit } from '@angular/core';
import {format} from "date-fns";
import {OrderService} from '../../services/order.service'

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders?: any;
  orderDetails ?: any;
  isVisible = false;
  page = 1;
  size = 4;
  total?: number;
  keyword = "";
  userName = "";
  userPhone = "";
  date: any = [];
  startDate = "";
  enDate = "";
  dateFormat = 'yyyy-MM-dd';
  totalPrice = 0;
  status: any;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.orderService.getAll(this.page, this.size, this.keyword, this.userName, this.userPhone, this.status ,this.startDate, this.enDate)
      .subscribe({
        next: (data) => {
          this.orders = data.content;
          let price = 0;
          for (const order of data.content) {
            price+= order.totalPrice;
          }
          this.totalPrice = price;
          console.log(this.totalPrice)
          this.page = data.pageable.pageNumber + 1;
          this.total = data.totalElements;
          console.log(this.orders);
        },
        error: (e) => console.error(e)
      });
  }

  showModal(event?: any): void {
    this.orderDetails = event;
    console.log(this.orderDetails)
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

  handlePageChange(event: number) {
    this.page = event;
    this.getAll()
  }

  search() {
    console.log(this.date);
    if (this.date.length>0 && this.date != null) {
      this.startDate = format(this.date[0], 'yyyy-MM-dd')
      this.enDate = format(this.date[1], 'yyyy-MM-dd')
      console.log(this.startDate);
      console.log(this.enDate);
    }
    this.getAll()

  }

  refresh() {
    this.keyword = '';
    this.date = '';
    this.startDate = '';
    this.enDate = '';
    this.userName = '';
    this.userPhone = '';
    this.getAll();
  }
}
