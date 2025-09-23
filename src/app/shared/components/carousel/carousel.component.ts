import { Component, input, output } from '@angular/core';
import { IProduct } from '@shared/models/general.models';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, DecimalPipe],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  itemsPerSlide = 1;
  private innerWidth!: number;
  private mobileBreakpoint = 480;
  products = input<IProduct[]>([]);
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 6 };
  addToCart = output<IProduct>();

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

  addToCartClick(product: IProduct) {
    this.addToCart.emit(product);
  }

}
