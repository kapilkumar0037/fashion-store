import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  name = input<string>();
  className = input<string>();
  width = input<string>();
  height = input<string>();
  type = input<string>('jpg');
  alt = input<string>('');
  src = '';

  ngOnInit() {
    this.src = this.setPath();
  }
  setPath() {
    return this.name() ? `https://cdn.jsdelivr.net/gh/kapilkumar0037/ecommerce-images@main/${this.name()}.${this.type()}` : '';
  }
}
