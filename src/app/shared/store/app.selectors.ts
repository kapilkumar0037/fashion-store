import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectAppStore = createFeatureSelector<AppState>('app');

export const selectAuthState = createSelector(selectAppStore, state => state.isAuthenticated);
export const selectUserDetailsState = createSelector(selectAppStore, state => state.userDetails);