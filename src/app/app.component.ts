import { Component } from '@angular/core';
import { HeaderBottomComponent, HeaderComponent, NavComponent } from './core';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { FeaturedCarouselComponent } from './shared/components/featured-carousel/featured-carousel.component';
import { TestimonialCarouselComponent } from './shared/components/testimonial-carousel/testimonial-carousel.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavComponent,
     HeaderBottomComponent, CarouselComponent, FeaturedCarouselComponent, TestimonialCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fashion-store';
  selectedTab = 'men'

  onTabChange(_selectedTab: string){
    this.selectedTab = _selectedTab;
  }
}
