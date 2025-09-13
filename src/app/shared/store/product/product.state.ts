import { IFashionProduct, IProduct } from "@shared/models/general.models";

export interface ProductState {
  products: IProduct[];
  featuredProducts?: IProduct[];
  trendingProducts?: IProduct[];
  loading: boolean;
  error: string | null;
  categories?: string[];
}

export const initialProductState: ProductState = {
  products: [],
  featuredProducts: [],
  trendingProducts: [],
  categories: [],
  loading: false,
  error: null
};