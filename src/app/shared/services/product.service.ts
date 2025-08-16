import { Injectable, inject } from '@angular/core';
import { IFashionProduct } from '@shared/models/general.models';
import { ApiService } from '@shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiService = inject(ApiService);

  getAllProducts(): Observable<IFashionProduct[]> {
    return this.apiService.getFeaturedProducts<IFashionProduct[]>().getAll();
  }

  getFeaturedProducts(audience: string): Observable<IFashionProduct[]> {
    return this.apiService.getFeaturedProducts<IFashionProduct[]>().getAll({ 
      audience, 
      isFeatured: true 
    });
  }

  getTrendingProducts(): Observable<IFashionProduct[]> {
    return this.apiService.getFeaturedProducts<IFashionProduct[]>().getAll({ 
      isTrending: true 
    });
  }
}
