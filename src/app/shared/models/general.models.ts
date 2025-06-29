export interface IFashionProduct {
  id: string;
  name: string;
  brand: string;
  category: string; // e.g., "Shirt", "Shoes", "Handbag"
  subCategory?: string; // e.g., "T-Shirt", "Sneakers"
  description?: string;
  price: number;
  discount?: number; // percentage, e.g., 20 for 20%
  currency: string; // e.g., "USD", "INR"

  sizes?: string[]; // e.g., ["S", "M", "L", "XL"]
  colors?: string[]; // e.g., ["red", "black"]

  images: string[]; // URLs to product images

  stock: number;
  isAvailable: boolean;

  ratings?: number; // average rating
  reviewsCount?: number;

  tags?: string[]; // e.g., ["new", "sale", "summer"]

  createdAt?: string; // ISO date
  updatedAt?: string;
}
