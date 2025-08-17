export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  stock: number;
}

export type Category = 
  | "breakfast" 
  | "lunch" 
  | "dinner" 
  | "soup" 
  | "desserts" 
  | "side_dish" 
  | "appetizer" 
  | "beverages";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  [productId: number]: CartItem;
}

export interface CartTotals {
  subTotal: number;
  tax: number;
  total: number;
}

export type PaymentMethod = "credit" | "paylater" | "cash";