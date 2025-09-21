import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '@shared/services/auth.service';
import { login } from '@shared/store/app.actions';
import { selectUserDetailsState } from '@shared/store/app.selectors';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  username: string = '';
  password: string = '';
  authService = inject(AuthService);
  router = inject(Router);
  store = inject(Store);
  userDetails$ = this.store.select(selectUserDetailsState);
  errorMessage: string = '';


  login() {
    console.log('Login attempt with', this.username, this.password);
    this.store.dispatch(login({ username: this.username, password: this.password }));
    this.userDetails$.subscribe(userDetails => {
      if (userDetails?.firstName){
      this.router.navigate(['/']);

      } else {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
