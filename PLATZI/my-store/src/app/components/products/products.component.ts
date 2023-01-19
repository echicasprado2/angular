import { Component } from '@angular/core';
import { Product } from './../../models/product.model';

import { StoreService } from './../../services/store.service';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();

  constructor(
    private myStoreService:StoreService,
    private myProductService: ProductsService
  ){
    this.myShoppingCart = this.myStoreService.getShoppingCart();
  }

  ngOnInit(): void {
    this.myProductService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.myStoreService.addProduct(product);
    this.total = this.myStoreService.getTotal();
  }

}
