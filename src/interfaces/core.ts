export interface User {
  userId: string; // uuid
  telegramId: number;
  fullName: string;
  userName?: string; //telegram username
  phoneNumber: string;
  email: string;
  role: "ADMIN" | "USER";
}

export interface Category {
  categoryId: string;
  categoryName: string;
}

// more interface will be added ...
