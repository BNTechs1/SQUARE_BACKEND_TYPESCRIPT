
export interface Item {
  name: string;
  unit: string;
  quantity: number;
  rate: number;
  value: number;
  requiredValue: number;
  stack: Stack[];
}

export interface Stack {
  price: string;
  quantity: number;
  value: number;
  userID: string;
  userName: string;
}
