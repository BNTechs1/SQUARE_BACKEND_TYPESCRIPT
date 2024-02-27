import { Document } from 'mongoose';

export interface ImageSchema extends Document{
  url: string,
  id: string
}

export interface Recipe {
  name: string;
  value: number;
}

export interface IMenu extends Document {
  _id: Object;
  name: string;
  description: string;
  size: string;
  category: string;
  type: string;
  price: number;
  files: [ImageSchema],
  recipe: Recipe[];
}
