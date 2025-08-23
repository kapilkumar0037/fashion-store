import { Component } from '@angular/core';
import { NewsLetterComponent } from '../../../shared';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [NewsLetterComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
