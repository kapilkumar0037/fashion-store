import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '@shared/index';
import { Store } from '@ngrx/store';
import { clearCart, loadCart, removeFromCart, updateCartItem } from '@shared/store/cart/cart.actions';
import { selectCartError, selectCartProducts, selectCartStatus, selectCartTotal } from '@shared/store/cart/cart.selectors';
import { ICart, ICartItem } from '@shared/models/cart.models';
import { IFashionProduct } from '@shared/models/general.models';
import { Observable } from 'rxjs';
import { ImageComponent } from "../../../../shared/components/image/image.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, AsyncPipe, FormsModule, RouterModule, ImageComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export default class CartComponent implements OnInit {
  private readonly store = inject(Store);
  readonly cartItems$ = this.store.select(selectCartProducts);
  readonly cartTotal$ = this.store.select(selectCartTotal);
  readonly status$ = this.store.select(selectCartStatus);
  readonly error$ = this.store.select(selectCartError);

  constructor() {}

  ngOnInit() {
    this.store.dispatch(loadCart());
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity > 0) {
      this.store.dispatch(updateCartItem({ productId, quantity }));
    } else {
      this.removeItem(productId);
    }
  }

  removeItem(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }
}
