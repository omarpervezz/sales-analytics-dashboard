import { faker } from "@faker-js/faker";
import type {
  Client,
  ClientType,
  CommissionRule,
  Department,
  Order,
  Product,
  SalesRep,
} from "../types/sales";
faker.seed(123);

export const departments: Department[] = [
  { id: "dept-1", name: "Enterprise Sales" },
  { id: "dept-2", name: "Retail Sales" },
  { id: "dept-3", name: "Wholesale" },
  { id: "dept-4", name: "Distribution" },
];

export const salesReps: SalesRep[] = Array.from({ length: 8 }, (_, index) => ({
  id: `rep-${index + 1}`,
  name: faker.person.fullName(),
  email: faker.internet.email().toLowerCase(),
  departmentId: departments[index % departments.length].id,
  targetAmount: faker.number.int({ min: 80000, max: 200000 }),
}));

const clientTypes: ClientType[] = [
  "retail",
  "wholesale",
  "enterprise",
  "distributor",
  "other",
];

export const clients: Client[] = Array.from({ length: 40 }, (_, index) => {
  const assignedRep = faker.helpers.arrayElement(salesReps);

  return {
    id: `client-${index + 1}`,
    name: faker.company.name(),
    type: faker.helpers.arrayElement(clientTypes),
    city: faker.location.city(),
    country: faker.location.country(),
    assignedRepId: assignedRep.id,
  };
});

const productCategories = ["Software", "Service", "Hardware", "Training"];

export const products: Product[] = Array.from({ length: 20 }, (_, index) => ({
  id: `product-${index + 1}`,
  name: faker.commerce.productName(),
  category: faker.helpers.arrayElement(productCategories),
  unitPrice: faker.number.int({ min: 100, max: 5000 }),
}));

export const commissionRules: CommissionRule[] = [
  { id: "comm-1", departmentId: "dept-1", rate: 0.08 },
  { id: "comm-2", departmentId: "dept-2", rate: 0.05 },
  { id: "comm-3", departmentId: "dept-3", rate: 0.06 },
  { id: "comm-4", departmentId: "dept-4", rate: 0.07 },
];

export const orders: Order[] = Array.from({ length: 500 }, (_, index) => {
  const client = faker.helpers.arrayElement(clients);
  const repId = client.assignedRepId;
  const product = faker.helpers.arrayElement(products);

  return {
    id: `order-${index + 1}`,
    clientId: client.id,
    repId,
    productId: product.id,
    quantity: faker.number.int({ min: 1, max: 50 }),
    unitPrice: product.unitPrice,
    orderDate: faker.date
      .between({
        from: "2024-01-01",
        to: "2025-12-31",
      })
      .toISOString()
      .slice(0, 10),
    status: faker.helpers.weightedArrayElement([
      { weight: 85, value: "completed" },
      { weight: 10, value: "pending" },
      { weight: 5, value: "cancelled" },
    ]),
  };
});
