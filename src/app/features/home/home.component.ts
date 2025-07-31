import { Component, inject } from '@angular/core';
import {
  BlogCardComponent, CarouselComponent,
  FeaturedAudienceComponent,
  FeaturedCarouselComponent,
  TestimonialCarouselComponent
} from '@shared/index';
import { HomeService } from './services/home.service';
import { IFashionProduct, IFeaturedAudience, IFeaturedTestimonials } from '@shared/models/general.models';

@Component({
  selector: 'app-home',
  imports: [
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
  homeService = inject(HomeService);
  featuredAudience: IFeaturedAudience[] = [];
  featuredTestimonials: IFeaturedTestimonials[] = [];
  featuredProducts: IFashionProduct[] = [];


  ngOnInit() {
    this.getAudience();
    this.getTestimonials();
    this.getFeatureProducts(this.selectedTab);
  }

  onTabChange(_selectedTab: string) {
    this.selectedTab = _selectedTab;
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

  getFeatureProducts(audience: string) {
    this.homeService.getFeatureProducts(audience).subscribe({
      next: (products) => {
        this.featuredProducts = products;
      },
      error: (error) => {
        console.error('Error fetching featured products:', error);
      }
    });
  }
}
