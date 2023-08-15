export interface Recipe {
  name: string;
  value: number;
}

export interface Menu {
  name: string;
  description: number;
  size: string;
  category: string;
  type: string;
  price: number;
  files: [],
  recipe: Recipe[];
}
