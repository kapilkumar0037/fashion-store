import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-testimonial-carousel',
  imports: [CarouselModule],
  templateUrl: './testimonial-carousel.component.html',
  styleUrl: './testimonial-carousel.component.scss'
})
export class TestimonialCarouselComponent {
 itemsPerSlide = 1;
  slides = [
    { img: "/assets/img/gallery/latest1.jpg.webp" },
    { img: "/assets/img/gallery/latest2.jpg.webp" },
    { img: "/assets/img/gallery/latest3.jpg.webp" },
    { img: "/assets/img/gallery/latest4.jpg.webp" },
  ];
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 6 };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
