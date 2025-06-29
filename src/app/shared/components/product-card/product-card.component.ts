import { Component, input } from '@angular/core';
import { IFashionProduct } from '../../models/general.models';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<IFashionProduct>();
}
