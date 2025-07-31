import { Component, HostListener, inject, input } from '@angular/core';
import { IFashionProduct } from '@shared/models/general.models';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ImageComponent } from "../image/image.component";
@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, ImageComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  itemsPerSlide = 1;
  private innerWidth!: number;
  private mobileBreakpoint = 480;
  products = input<IFashionProduct[]>([]);
  slides = [
    { img: "/assets/img/gallery/latest1.jpg.webp" },
    { img: "/assets/img/gallery/latest2.jpg.webp" },
    { img: "/assets/img/gallery/latest3.jpg.webp" },
    { img: "/assets/img/gallery/latest4.jpg.webp" },
  ];
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 6 };

  ngOnInit() {
    this.adjustsItemsPerSlide();
  }

  private adjustsItemsPerSlide() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < this.mobileBreakpoint) {
      this.itemsPerSlide = 1;
    } else {
      this.itemsPerSlide = 4;
    }
  }

}
