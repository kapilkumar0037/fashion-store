import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '@shared/components/search/search.component';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, SearchComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
