import { Component, HostListener } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-carousel',
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  itemsPerSlide = 4;
  slides = [
    { img: "/assets/img/gallery/latest1.jpg.webp" },
    { img: "/assets/img/gallery/latest2.jpg.webp" },
    { img: "/assets/img/gallery/latest3.jpg.webp" },
    { img: "/assets/img/gallery/latest4.jpg.webp" },
  ];
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 6 };



}
