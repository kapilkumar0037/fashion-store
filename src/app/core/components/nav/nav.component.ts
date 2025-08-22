import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { SearchComponent } from '@shared/components/search/search.component';
import { AppStore } from '@shared/store/app.state';
import { loadCart } from '@shared/store/cart/cart.actions';
import { selectCartItemsCount } from '@shared/store/cart/cart.selectors';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, SearchComponent, AsyncPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  store = inject(Store<AppStore>);
  isAuthenticated$ = this.store.select(state => state.app.isAuthenticated);
  readonly cartTotalItems$ = this.store.select(selectCartItemsCount);
  
  ngOnInit() {
     this.store.dispatch(loadCart());
    this.isAuthenticated$.subscribe(isAuthenticated => {
      console.log('User authentication status:', isAuthenticated);
    });
     this.cartTotalItems$.subscribe(isAuthenticated => {
      console.log('User Cart status:', isAuthenticated);
    });
  }
}
