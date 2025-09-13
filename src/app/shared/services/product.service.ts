import { Injectable, inject } from '@angular/core';
import { IFashionProduct, IProduct } from '@shared/models/general.models';
import { ApiService } from '@shared/services/api.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiService = inject(ApiService);

  getAllProducts(searchTerm: string): Observable<IProduct[]> {
    return this.apiService.getProductsBySearchTerm<any>().getAll({ q: searchTerm
    }).pipe(
      map(response => response.products) // Limit to top 10 trending products
    );;
  }

  getFeaturedProducts(audience: string): Observable<IProduct[]> {
    return this.apiService.getProductsByCategory<any>().getAll({
    }, undefined, { category: audience }).pipe(
      map(response => response.products) // Limit to top 10 trending products
    );;
  }


  getTrendingProducts(): Observable<IProduct[]> {
    return this.apiService.getFeaturedProducts<any>().getAll({
      isTrending: true
    }).pipe(
      map(response => response.products) // Limit to top 10 trending products
    );
  }
}
