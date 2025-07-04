export interface IProductVariant {
  id: string;            // unique variant ID
  size: string;          // e.g., "M"
  color: string;         // e.g., "Red"
  stock: number;         // stock for this size+color combo
  price?: number;        // optional override
  images?: string[];     // optional variant-specific images
}
export type FashionAudience = 'Men' | 'Women' | 'Kids' | 'Unisex';


export interface IFashionProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  description?: string;
  price: number;
  discount?: number;
  currency: string;

  sizes?: string[];
  colors?: string[];
  variants?: IProductVariant[]; // 🔥 variant-level inventory

  images: string[];

  isAvailable: boolean;

  ratings?: number;
  reviewsCount?: number;

  tags?: string[];
  genderTarget: FashionAudience[];

  createdAt?: string;
  updatedAt?: string;
}

