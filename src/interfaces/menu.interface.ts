export interface Recipe {
  name: string;
  value: number;
}

export interface Menu {
  name: string;
  description: number;
  size: string;
  catagory: string;
  type: string;
  price: number;
  recipe: Recipe[];
}
