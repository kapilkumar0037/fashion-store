import { inject, Injectable } from '@angular/core';
import { Api } from './api';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '@shared/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBaseUrl: string =  environment.apiBaseUrl;
  httpClient = inject(HttpClient);
  constructor() { }

  getFeaturedAudience<T = any>(): Api<T> {
    return this.getApi(ApiConstants.FEATURED_AUDIENCE);
  }
  getFeaturedTestimonials<T = any>(): Api<T> {
    return this.getApi(ApiConstants.TESTIMONIALS);
  }

  private getApi<T>(endpoint: string): Api<T> {
    return new Api<T>(this.httpClient, this.apiBaseUrl + endpoint);
  }
}
