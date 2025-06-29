import { Component } from '@angular/core';
import { HeaderBottomComponent, HeaderComponent, NavComponent } from './core';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { FeaturedCarouselComponent } from './shared/components/featured-carousel/featured-carousel.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavComponent, HeaderBottomComponent, CarouselComponent, FeaturedCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fashion-store';
}
