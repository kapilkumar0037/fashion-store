import { Component, input } from '@angular/core';
import { IFeaturedTestimonials } from '@shared/models/general.models';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ImageComponent } from "../image/image.component";

@Component({
  selector: 'app-testimonial-carousel',
  imports: [CarouselModule, ImageComponent],
  templateUrl: './testimonial-carousel.component.html',
  styleUrl: './testimonial-carousel.component.scss'
})
export class TestimonialCarouselComponent {
  testimonials = input<IFeaturedTestimonials[]>([]);
  itemsPerSlide = 1;
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 6 };

}
