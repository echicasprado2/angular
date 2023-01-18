import { Component } from '@angular/core';
import { Product } from './../../models/product.model';

import { StoreService } from './../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'Album',
      image: './../../assets/images/album.jpg',
      price: 90
    },{
      id: '2',
      name: 'Bike',
      image: './../../assets/images/bike.jpg',
      price: 900
    },{
      id: '3',
      name: 'Books',
      image: './../../assets/images/books.jpg',
      price: 10
    }

  ];

  constructor(
    private myStoreService:StoreService
  ){
    this.myShoppingCart = this.myStoreService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product) {
    this.myStoreService.addProduct(product);
    this.total = this.myStoreService.getTotal();
  }

}
