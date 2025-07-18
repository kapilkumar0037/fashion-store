import { Component } from '@angular/core';
import {
  BlogCardComponent, CarouselComponent,
  FeaturedCarouselComponent,
  TestimonialCarouselComponent
} from '@shared/index';

@Component({
  selector: 'app-home',
  imports: [
    FeaturedCarouselComponent,
    TestimonialCarouselComponent,
    CarouselComponent,
    BlogCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  selectedTab = 'men'

  onTabChange(_selectedTab: string) {
    this.selectedTab = _selectedTab;
  }
}
