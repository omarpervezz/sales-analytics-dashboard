import type {
  Client,
  CommissionRule,
  Department,
  Order,
  Product,
  SalesRep,
} from "../types/sales";

export type MaybePromise<T> = T | Promise<T>;

export type SalesRepository = {
  getDepartments(): MaybePromise<Department[]>;
  getSalesReps(): MaybePromise<SalesRep[]>;
  getClients(): MaybePromise<Client[]>;
  getProducts(): MaybePromise<Product[]>;
  getOrders(): MaybePromise<Order[]>;
  getCommissionRules(): MaybePromise<CommissionRule[]>;
};
