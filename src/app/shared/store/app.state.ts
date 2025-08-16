import { ProductState } from "./product/product.state";
import { CartState } from "./cart/cart.state";

export interface AppState {
    isAuthenticated: boolean;
}
export interface AppStore {
    app: AppState;
    product: ProductState;
    cart: CartState;
}

export const initialAuthState: AppState = {
    isAuthenticated: true
};