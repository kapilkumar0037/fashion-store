import { Component } from '@angular/core';
import { HeaderBottomComponent, HeaderComponent, NavComponent } from './core';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavComponent, HeaderBottomComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fashion-store';
}
