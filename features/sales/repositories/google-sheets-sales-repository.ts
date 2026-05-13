import type {
  Client,
  CommissionRule,
  Department,
  Order,
  Product,
  SalesRep,
} from "../types/sales";
import type { SalesRepository } from "./sales-repository.types";
import { readSheetRows } from "./google-sheets-reader";

export const googleSheetsSalesRepository: SalesRepository = {
  async getDepartments(): Promise<Department[]> {
    const rows = await readSheetRows("Departments");

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
    }));
  },

  async getSalesReps(): Promise<SalesRep[]> {
    const rows = await readSheetRows("SalesReps");

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      email: row.email,
      departmentId: row.departmentId,
      targetAmount: Number(row.targetAmount),
    }));
  },

  async getClients(): Promise<Client[]> {
    const rows = await readSheetRows("Clients");

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      type: row.type as Client["type"],
      city: row.city,
      country: row.country,
      assignedRepId: row.assignedRepId,
    }));
  },

  async getProducts(): Promise<Product[]> {
    const rows = await readSheetRows("Products");

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      category: row.category,
      unitPrice: Number(row.unitPrice),
    }));
  },

  async getOrders(): Promise<Order[]> {
    const rows = await readSheetRows("Orders");

    return rows.map((row) => ({
      id: row.id,
      clientId: row.clientId,
      repId: row.repId,
      productId: row.productId,
      quantity: Number(row.quantity),
      unitPrice: Number(row.unitPrice),
      orderDate: row.orderDate,
      status: row.status as Order["status"],
    }));
  },

  async getCommissionRules(): Promise<CommissionRule[]> {
    const rows = await readSheetRows("CommissionRules");

    return rows.map((row) => ({
      id: row.id,
      departmentId: row.departmentId,
      rate: Number(row.rate),
    }));
  },
};
