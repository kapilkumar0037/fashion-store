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
  isFeatured?: boolean;
  isTrending?: boolean;
  ratings?: number;
  reviewsCount?: number;

  tags?: string[];
  genderTarget: FashionAudience[];

  createdAt?: string;
  updatedAt?: string;
}

export interface IFeaturedAudience {
  id: number;
  name: string;
  description?: string;
  image?: string; 
  btnText?: string; 
  createdAt?: string;
  updatedAt?: string;
}

export interface IFeaturedTestimonials {
  id: number;
  name: string;
  title?: string;
  review?: string;
  image?: string; 
  designation?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    barcode: string;
    qrCode: string; // URL
  };
  images: string[];
  thumbnail: string;
}

export interface IReview {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}