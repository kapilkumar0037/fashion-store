import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { SearchComponent } from '@shared/components/search/search.component';
import { AuthService } from '@shared/services/auth.service';
import { selectAuthState, selectUserDetailsState } from '@shared/store/app.selectors';
import { AppStore } from '@shared/store/app.state';
import { loadCart } from '@shared/store/cart/cart.actions';
import { selectCartItemsCount } from '@shared/store/cart/cart.selectors';
import { loadProducts } from '@shared/store/product/product.actions';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, SearchComponent, AsyncPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  store = inject(Store<AppStore>);
  private router = inject(Router);
  private authService = inject(AuthService);


  isAuthenticated$ = this.store.select(selectAuthState);
  userDetails$ = this.store.select(selectUserDetailsState);

  readonly cartTotalItems$ = this.store.select(selectCartItemsCount);
  
  ngOnInit() {
     this.store.dispatch(loadCart());
    this.isAuthenticated$.subscribe(isAuthenticated => {
      console.log('User authentication status:', isAuthenticated);
    });
     this.userDetails$.subscribe(userDetails => {
      console.log('User details:', userDetails);
    });
     this.cartTotalItems$.subscribe(isAuthenticated => {
      console.log('User Cart status:', isAuthenticated);
    });
  }

  onNavItemClick(searchTerm: string) {
      this.store.dispatch(loadProducts({ searchTerm: searchTerm }));
      this.router.navigate(['/products']);
  
    }
}
