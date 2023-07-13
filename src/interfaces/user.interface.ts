export interface User {
  phoneNumber: string;
  password: string;
  role: "ADMIN" | "CASHER" | "PURCHASER" | "CUSTOMER";
  employeeId: string;
}
