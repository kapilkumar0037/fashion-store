import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadProducts } from '@shared/store/product/product.actions';

@Component({
  selector: 'app-header-bottom',
  imports: [],
  templateUrl: './header-bottom.component.html',
  styleUrl: './header-bottom.component.scss'
})
export class HeaderBottomComponent {
  private store = inject(Store);
  private router = inject(Router);


  onShopNowClick(searchTerm: string) {
    this.store.dispatch(loadProducts({ searchTerm: searchTerm }));
    this.router.navigate(['/products']);

  }
}
