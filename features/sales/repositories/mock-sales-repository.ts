import {
  clients,
  commissionRules,
  departments,
  orders,
  products,
  salesReps,
} from "../data/mock-data";
import type { SalesRepository } from "./sales-repository.types";

export const mockSalesRepository: SalesRepository = {
  getDepartments() {
    return departments;
  },

  getSalesReps() {
    return salesReps;
  },

  getClients() {
    return clients;
  },

  getProducts() {
    return products;
  },

  getOrders() {
    return orders;
  },

  getCommissionRules() {
    return commissionRules;
  },
};
