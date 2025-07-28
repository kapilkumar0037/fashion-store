import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./app.state";
import { login, logout } from "./app.actions";

export const appReducer = createReducer(
  initialAuthState,
  on(login, (state) => ({
    ...state,
    isAuthenticated: true
  })),
  on(logout, (state) => ({
    ...state,
    isAuthenticated: false
  }))
);