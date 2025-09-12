import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BreadcrumbComponent } from '@shared/index';
import { IProduct } from '@shared/models/general.models';
import { addToCart } from '@shared/store/cart/cart.actions';
import { getFeaturedProducts } from '@shared/store/product/product.actions';
import { selectFeaturedProducts } from '@shared/store/product/product.selector';

@Component({
  selector: 'app-products',
  imports: [BreadcrumbComponent, DecimalPipe, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {
  private store = inject(Store);

  searchTerm = input('');
  products = input<IProduct[]>([]);
  featuredProducts$ = this.store.select(selectFeaturedProducts);



  ngOnInit() {
    console.log('Search Term:', this.searchTerm());
    this.loadProducts()
  }
  private loadProducts() {
    this.store.dispatch(getFeaturedProducts({ audience: this.searchTerm() }));
  }

  addProductToCart(product: IProduct) {
    //console.log('Adding product to cart:', product);
    this.store.dispatch(addToCart({ productId: product.id, product, quantity: 1 }));
  }
}
