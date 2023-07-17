export interface menuSchema {
  menuCat: string;
  name: string;
  description: number;
  rate: number;
  value: number;
  requiredValue: number;
  size: Size[];
}

export interface Size {
  name: string;
  price: number;
  recipe: Recipe[];
}

export interface Recipe {
  name: string;
  value: number;
}
