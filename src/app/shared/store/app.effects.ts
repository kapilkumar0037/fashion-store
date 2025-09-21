import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "@shared/services/auth.service";
import { catchError, map, mergeMap, of } from "rxjs";
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  // Load Products Effect
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.login),
      mergeMap(({username, password}) => this.authService.login(username, password)
        .pipe(
          map(response => AppActions.loginSuccess({response})),
          catchError(error => of(AppActions.loginFailure({ error: error.message })))
        ))
    );
  });

}
