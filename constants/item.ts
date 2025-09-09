export interface ProductVariant {
  name: string;
  price: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: any;
  variants: ProductVariant[];
  des: string
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
  avatar: any;
}
