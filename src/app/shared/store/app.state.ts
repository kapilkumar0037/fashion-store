import { ProductState } from "./product/product.state";

export interface AppState {
    isAuthenticated: boolean;
}
export interface AppStore {
    app: AppState;
    product: ProductState;
}

export const initialAuthState: AppState = {
    isAuthenticated: true
};