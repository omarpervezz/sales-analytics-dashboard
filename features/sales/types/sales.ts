export type ClientType =
  | "retail"
  | "wholesale"
  | "enterprise"
  | "distributor"
  | "other";

export type OrderStatus = "pending" | "completed" | "cancelled";

export type Department = {
  id: string;
  name: string;
};

export type SalesRep = {
  id: string;
  name: string;
  email: string;
  departmentId: string;
  targetAmount: number;
};

export type Client = {
  id: string;
  name: string;
  type: ClientType;
  city: string;
  country: string;
  assignedRepId: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  unitPrice: number;
};

export type Order = {
  id: string;
  clientId: string;
  repId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  orderDate: string;
  status: OrderStatus;
};

export type CommissionRule = {
  id: string;
  departmentId: string;
  rate: number;
};
