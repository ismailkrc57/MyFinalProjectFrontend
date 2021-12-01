import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'ismail karaca';
  product1: any = {
    productId: 1,
    productName: 'bardak',
    category: 1,
    unitPrice: 5,
  };
  product2: any = {
    productId: 1,
    productName: 'bardak',
    category: 1,
    unitPrice: 5,
  };
  product3: any = {
    productId: 1,
    productName: 'bardak',
    category: 1,
    unitPrice: 5,
  };
  product4: any = {
    productId: 1,
    productName: 'bardak',
    category: 1,
    unitPrice: 5,
  };
  product5: any = {
    productId: 1,
    productName: 'bardak',
    category: 1,
    unitPrice: 5,
  };

  products: any = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
}
