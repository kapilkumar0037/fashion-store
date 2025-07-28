import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { SearchComponent } from '@shared/components/search/search.component';
import { AppStore } from '@shared/store/app.state';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, SearchComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  store = inject(Store<AppStore>);
  isAuthenticated$ = this.store.select(state => state.app.isAuthenticated);

  ngOnInit() {
    this.isAuthenticated$.subscribe(isAuthenticated => {
      console.log('User authentication status:', isAuthenticated);
    });
  }
}
