import { inject, Injectable } from '@angular/core';
import { IFashionProduct, IFeaturedAudience, IFeaturedTestimonials } from '@shared/models/general.models';
import { ApiService } from '@shared/services/api.service';
import { Observable, of } from 'rxjs';
import { FeaturedAudience, testimonials } from '../constants/general.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiService = inject(ApiService);

  getFeaturedAudience(): Observable<IFeaturedAudience[]> {
    //return this.apiService.getFeaturedAudience<IFeaturedAudience[]>().getAll();
    return of(FeaturedAudience);
  }

  getFeaturedTestimonials(): Observable<IFeaturedTestimonials[]> {
    return of(testimonials)
    //return this.apiService.getFeaturedTestimonials<IFeaturedTestimonials[]>().getAll();
  }

  getFeatureProducts(audience: string): Observable<IFashionProduct[]> {
    return this.apiService.getProductsByCategory<IFashionProduct[]>().getAll({}, undefined, { category: audience });
  }
  getTrendingProducts(): Observable<IFashionProduct[]> {
    return this.apiService.getFeaturedProducts<IFashionProduct[]>().getAll({ isTrending: true });
  }
}
