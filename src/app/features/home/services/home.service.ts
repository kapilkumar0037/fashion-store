import { inject, Injectable } from '@angular/core';
import { IFeaturedAudience, IFeaturedTestimonials } from '@shared/models/general.models';
import { ApiService } from '@shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiService = inject(ApiService);

  getFeaturedAudience(): Observable<IFeaturedAudience[]> {
    return this.apiService.getFeaturedAudience<IFeaturedAudience[]>().getAll();
  }

    getFeaturedTestimonials(): Observable<IFeaturedTestimonials[]> {
    return this.apiService.getFeaturedTestimonials<IFeaturedTestimonials[]>().getAll();
  }
}
