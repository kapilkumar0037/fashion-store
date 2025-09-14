import { Injectable, inject } from '@angular/core';
import { IFashionProduct, IProduct } from '@shared/models/general.models';
import { ApiService } from '@shared/services/api.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiService = inject(ApiService);
  menCategories = 'mens-shirts,mens-shoes,mens-watches,mens-jackets';
  womenCategories = 'women-bags,womens-dresses,womens-shoes,womens-watches,womens-jewellery';
  kidsCategories = 'tops,skirts,kids-shoes,kids-watches';
  accessoriesCategories = 'mens-watches,womens-watches';
  beautyCategories = 'beauty,fragrances,skin-cares';

  getAllProducts(searchTerm: string): Observable<IProduct[]> {
    return this.apiService.getProductsBySearchTerm<any>().getAll({
      q: '', limit: 200
    }).pipe(
      map(response => {
        const _searchTerm = searchTerm.split(',');
        const optimizedProducts: IProduct[] = [];
        _searchTerm.forEach(term => {
          let filteredProducts: IProduct[] = [];
          if (term === 'men') {
            filteredProducts = response.products.filter((product: any) => this.menCategories.includes(product.category));

          } else if (term === 'women') {
            filteredProducts = response.products.filter((product: any) => this.womenCategories.includes(product.category));
          }
          else if (term === 'kids') {
            filteredProducts = response.products.filter((product: any) => this.kidsCategories.includes(product.category));
          }
          else if (term === 'accessories') {
            filteredProducts = response.products.filter((product: any) => this.accessoriesCategories.includes(product.category));
          }
          else if (term === 'beauty') {
            filteredProducts = response.products.filter((product: any) => this.beautyCategories.includes(product.category));
          }
          //const filteredProducts = response.products.filter((product: any) => product.category.includes(term));
          optimizedProducts.push(...filteredProducts);
        });
        return optimizedProducts;
      }
      ) // Limit to top 10 trending products
    );;
  }

  getFeaturedProducts(audience: string): Observable<IProduct[]> {
    return this.apiService.getProductsByCategory<any>().getAll({
    }, undefined, { category: audience }).pipe(
      map(response => response.products) // Limit to top 10 trending products
    );;
  }


  getTrendingProducts(): Observable<IProduct[]> {
    return  this.getAllProducts('accessories')
  }
  getProductCategories(): Observable<string[]> {
    return this.apiService.getProductCategories<any>().getAll().pipe(
      map(response => response) // Limit to top 10 trending products
    );
  }

  getProductsByCategory(category: string): Observable<IProduct[]> {
    return this.apiService.getProductsByCategory<any>().getAll({
      limit: 30
    }, undefined, { category: category }).pipe(
      map(response => response.products) // Limit to top 10 trending products
    );
  }

}
