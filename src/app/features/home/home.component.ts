import { Component, inject } from '@angular/core';
import {
  BlogCardComponent, CarouselComponent,
  FeaturedAudienceComponent,
  FeaturedCarouselComponent,
  TestimonialCarouselComponent
} from '@shared/index';
import { HomeService } from './services/home.service';
import { IFeaturedAudience } from '@shared/models/general.models';

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

  ngOnInit() {
    this.getAudience();
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
}
