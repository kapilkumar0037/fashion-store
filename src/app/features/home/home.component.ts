import { Component } from '@angular/core';
import { CarouselComponent, FeaturedCarouselComponent, TestimonialCarouselComponent } from '../../shared';
import { BlogCardComponent } from '../../shared/components/blog-card/blog-card.component';

@Component({
  selector: 'app-home',
  imports: [ FeaturedCarouselComponent, TestimonialCarouselComponent, CarouselComponent, BlogCardComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
selectedTab = 'men'

  onTabChange(_selectedTab: string){
    this.selectedTab = _selectedTab;
  }
}
