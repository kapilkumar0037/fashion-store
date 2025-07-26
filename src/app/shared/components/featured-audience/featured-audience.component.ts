import { Component, input } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { IFeaturedAudience } from '@shared/models/general.models';

@Component({
  selector: 'app-featured-audience',
  imports: [ImageComponent],
  templateUrl: './featured-audience.component.html',
  styleUrl: './featured-audience.component.scss'
})
export class FeaturedAudienceComponent {
  audience = input<IFeaturedAudience[] | null>(null);

  onClick(audience: IFeaturedAudience) {
    // Handle click event, e.g., navigate to a details page or perform an action
    console.log('Audience clicked:', audience);

  }
}
