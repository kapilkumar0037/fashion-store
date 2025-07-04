import { Component } from '@angular/core';
import { CarouselComponent, FeaturedCarouselComponent, TestimonialCarouselComponent } from '../../shared';

@Component({
  selector: 'app-home',
  imports: [ FeaturedCarouselComponent, TestimonialCarouselComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
selectedTab = 'men'

  onTabChange(_selectedTab: string){
    this.selectedTab = _selectedTab;
  }
}
