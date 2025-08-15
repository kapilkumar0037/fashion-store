import { IFashionProduct } from "@shared/models/general.models";

export interface ProductState {
  products: IFashionProduct[];
  featuredProducts?: IFashionProduct[];
  trendingProducts?: IFashionProduct[];
  loading: boolean;
  error: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  featuredProducts: [],
  trendingProducts: [],
  loading: false,
  error: null
};