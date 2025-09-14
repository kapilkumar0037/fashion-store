import { Component, output } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-featured-carousel',
  imports: [CarouselModule],
  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.scss'
})
export class FeaturedCarouselComponent {
featuredCarouselEmit = output<string>();

onShopnowClick(searchTerm: string) {
  this.featuredCarouselEmit.emit(searchTerm); 
}

}