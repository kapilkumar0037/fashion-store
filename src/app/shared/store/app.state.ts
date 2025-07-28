
export interface AppState {
    isAuthenticated: boolean;
}
export interface AppStore {
    app: AppState;
}

export const initialAuthState: AppState = {
    isAuthenticated: true
};