import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  BlogCardComponent, CarouselComponent,
  FeaturedAudienceComponent,
  FeaturedCarouselComponent,
  TestimonialCarouselComponent
} from '@shared/index';
import { HomeService } from './services/home.service';
import { IFashionProduct, IFeaturedAudience, IFeaturedTestimonials } from '@shared/models/general.models';
import { Store } from '@ngrx/store';
import { selectFeaturedProducts, selectTrendingProducts } from '@shared/store/product/product.selector';
import { loadProducts, getFeaturedProducts, getTrendingProducts } from '@shared/store/product/product.actions';
import { addToCart } from '@shared/store/cart/cart.actions';

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    FeaturedCarouselComponent,
    TestimonialCarouselComponent,
    CarouselComponent,
    BlogCardComponent,
    FeaturedAudienceComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  selectedTab = 'men'
  private store = inject(Store);
  homeService = inject(HomeService);
  featuredAudience: IFeaturedAudience[] = [];
  featuredTestimonials: IFeaturedTestimonials[] = [];
  featuredProducts$ = this.store.select(selectFeaturedProducts);
  trendingProducts$ = this.store.select(selectTrendingProducts);
  trendingTabs = [
    { labelText: 'Men', value: 'men' },
    { labelText: 'Women', value: 'women' },
    { labelText: 'Kids', value: 'kids' }
  ]

  ngOnInit() {
    this.getAudience();
    this.getTestimonials();
    this.loadProducts();
  }

  onTabChange(_selectedTab: string) {
    this.selectedTab = _selectedTab;
    this.loadProducts();
  }

  private loadProducts() {
    this.store.dispatch(getFeaturedProducts({ audience: this.selectedTab }));
    this.store.dispatch(getTrendingProducts());
  }

  getAudience() {
    this.homeService.getFeaturedAudience().subscribe({
      next: (audience: IFeaturedAudience[]) => {
        this.featuredAudience = audience;
      },
      error: (error) => {
        console.error('Error fetching featured audience:', error);
      }
    })
  }

  getTestimonials() {
    this.homeService.getFeaturedTestimonials().subscribe({
      next: (testimonials: IFeaturedTestimonials[]) => {
        this.featuredTestimonials = testimonials;
      },
      error: (error) => {
        console.error('Error fetching featured audience:', error);
      }
    })
  }

  addProductToCart(product: IFashionProduct) {
    this.store.dispatch(addToCart({ productId: product.id, product, quantity: 1 }));
  }
}
