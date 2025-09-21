import { ProductState } from "./product/product.state";
import { CartState } from "./cart/cart.state";
import { IUser } from "@shared/models/general.models";

export interface AppState {
    isAuthenticated: boolean;
    userDetails?: IUser
}
export interface AppStore {
    app: AppState;
    product: ProductState;
    cart: CartState;
}

export const initialAuthState: AppState = {
    isAuthenticated: false
};