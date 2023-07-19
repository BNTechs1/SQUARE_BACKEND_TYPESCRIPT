export interface Recipe {
  name: string;
  value: number;
}

export interface Size {
  name: string;
  price: number;
  recipe: Recipe[];
}

export interface Menu {
  name: string;
  description: number;
  size: Size[];
}

export interface MenuCat {
  name: string;
  menu: Menu[];
}

export interface MenuType {
  name: string;
  menuCat: MenuCat[];
}
