import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProductByCategories, getProductCategories } from '@shared/store/product/product.actions';
import { selectAllProductcategories } from '@shared/store/product/product.selector';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-search',
  imports: [TypeaheadModule, FormsModule, AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  store = inject(Store);
  router = inject(Router);

  categories$ = this.store.select(selectAllProductcategories);

  ngOnInit() {
    this.getproductCategories();
  }

  getproductCategories() {
    this.store.dispatch(getProductCategories());
  }

  searchProducts(category: string) {
    this.store.dispatch(getProductByCategories({ category: category }));
    this.router.navigate(['/products', category]);
  }
}
