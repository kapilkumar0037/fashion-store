import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./app.state";
import { login, loginFailure, loginSuccess, logout } from "./app.actions";

export const appReducer = createReducer(
  initialAuthState,
   on(login, (state) => ({
      ...state,
      loading: true,
      error: null
    })),
    on(loginSuccess, (state, { response }) => ({
      ...state,
      loading: false,
      isAuthenticated: response.accessToken ? true : false,
      userDetails: response
    })),
    on(loginFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error: error
    })),
  on(logout, (state) => ({
    ...state,
    isAuthenticated: false
  }))
);