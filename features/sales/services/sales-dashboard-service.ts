import { googleSheetsSalesRepository } from "../repositories/google-sheets-sales-repository";
import type {
  Client,
  CommissionRule,
  Department,
  Order,
  Product,
  SalesRep,
} from "../types/sales";

type SalesFilters = {
  year?: string;
  repId?: string;
};

function groupOrdersByKey(orders: Order[], getKey: (order: Order) => string) {
  const map = new Map<string, Order[]>();

  for (const order of orders) {
    const key = getKey(order);
    const existingOrders = map.get(key) ?? [];
    existingOrders.push(order);
    map.set(key, existingOrders);
  }

  return map;
}

function getOrderRevenue(order: Order) {
  return order.quantity * order.unitPrice;
}

function matchesFilters(order: Order, filters?: SalesFilters) {
  if (!filters) return true;

  if (filters.year && filters.year !== "all") {
    if (order.orderDate.slice(0, 4) !== filters.year) return false;
  }

  if (filters.repId && filters.repId !== "all") {
    if (order.repId !== filters.repId) return false;
  }

  return true;
}

function getCompletedOrders(orders: Order[]) {
  return orders.filter((order) => order.status === "completed");
}

function sortByRevenueDesc<T extends { revenue: number }>(items: T[]) {
  return [...items].sort((a, b) => b.revenue - a.revenue);
}

function getTopClients(
  clients: Client[],
  completedOrdersByClientId: Map<string, Order[]>,
  limit = 5,
) {
  return sortByRevenueDesc(
    clients.map((client) => {
      const clientOrders = completedOrdersByClientId.get(client.id) ?? [];

      return {
        clientId: client.id,
        name: client.name,
        revenue: clientOrders.reduce(
          (total, order) => total + getOrderRevenue(order),
          0,
        ),
      };
    }),
  )
    .filter((client) => client.revenue > 0)
    .slice(0, limit);
}

function getTopProducts(
  products: Product[],
  completedOrdersByProductId: Map<string, Order[]>,
  limit = 5,
) {
  return sortByRevenueDesc(
    products.map((product) => {
      const productOrders = completedOrdersByProductId.get(product.id) ?? [];

      return {
        productId: product.id,
        name: product.name,
        category: product.category,
        revenue: productOrders.reduce(
          (total, order) => total + getOrderRevenue(order),
          0,
        ),
      };
    }),
  )
    .filter((product) => product.revenue > 0)
    .slice(0, limit);
}

function getDepartmentRevenue(
  orders: Order[],
  departments: Department[],
  salesReps: SalesRep[],
) {
  const completedOrders = getCompletedOrders(orders);

  return sortByRevenueDesc(
    departments.map((department) => {
      const departmentRepIds = salesReps
        .filter((rep) => rep.departmentId === department.id)
        .map((rep) => rep.id);

      const departmentOrders = completedOrders.filter((order) =>
        departmentRepIds.includes(order.repId),
      );

      return {
        departmentId: department.id,
        name: department.name,
        revenue: departmentOrders.reduce(
          (total, order) => total + getOrderRevenue(order),
          0,
        ),
      };
    }),
  ).filter((department) => department.revenue > 0);
}

function getClientTypeRevenue(orders: Order[], clients: Client[]) {
  const completedOrders = getCompletedOrders(orders);

  const clientTypes = Array.from(new Set(clients.map((client) => client.type)));

  return sortByRevenueDesc(
    clientTypes.map((type) => {
      const clientIds = clients
        .filter((client) => client.type === type)
        .map((client) => client.id);

      const typeOrders = completedOrders.filter((order) =>
        clientIds.includes(order.clientId),
      );

      return {
        type,
        revenue: typeOrders.reduce(
          (total, order) => total + getOrderRevenue(order),
          0,
        ),
      };
    }),
  ).filter((item) => item.revenue > 0);
}

function getSalesRepPerformance(
  salesReps: SalesRep[],
  completedOrdersByRepId: Map<string, Order[]>,
) {
  return sortByRevenueDesc(
    salesReps.map((rep) => {
      const repOrders = completedOrdersByRepId.get(rep.id) ?? [];

      const revenue = repOrders.reduce(
        (total, order) => total + getOrderRevenue(order),
        0,
      );

      return {
        repId: rep.id,
        name: rep.name,
        revenue,
        targetAmount: rep.targetAmount,
        achievementRate:
          rep.targetAmount === 0 ? 0 : (revenue / rep.targetAmount) * 100,
      };
    }),
  ).filter((rep) => rep.revenue > 0);
}

function getMonthlyRevenueTrend(completedOrdersByMonth: Map<string, Order[]>) {
  return Array.from({ length: 12 }, (_, index) => {
    const month = String(index + 1).padStart(2, "0");
    const monthOrders = completedOrdersByMonth.get(month) ?? [];

    return {
      month,
      revenue: monthOrders.reduce(
        (total, order) => total + getOrderRevenue(order),
        0,
      ),
    };
  });
}

function getYearOverYearRevenue(completedOrdersByYear: Map<string, Order[]>) {
  return Array.from(completedOrdersByYear.keys())
    .sort()
    .map((year) => {
      const yearOrders = completedOrdersByYear.get(year) ?? [];

      return {
        year,
        revenue: yearOrders.reduce(
          (total, order) => total + getOrderRevenue(order),
          0,
        ),
      };
    });
}

function getSalesRepCommissions(
  salesReps: SalesRep[],
  completedOrdersByRepId: Map<string, Order[]>,
  commissionRules: CommissionRule[],
) {
  return sortByRevenueDesc(
    salesReps.map((rep) => {
      const repOrders = completedOrdersByRepId.get(rep.id) ?? [];

      const revenue = repOrders.reduce(
        (total, order) => total + getOrderRevenue(order),
        0,
      );

      const rule = commissionRules.find(
        (rule) => rule.departmentId === rep.departmentId,
      );

      const commissionRate = rule?.rate ?? 0;

      return {
        repId: rep.id,
        name: rep.name,
        revenue,
        commissionRate,
        commissionAmount: revenue * commissionRate,
      };
    }),
  ).filter((rep) => rep.revenue > 0);
}

function getOrderStatusBreakdown(orders: Order[]) {
  return [
    {
      status: "completed",
      count: orders.filter((order) => order.status === "completed").length,
    },
    {
      status: "pending",
      count: orders.filter((order) => order.status === "pending").length,
    },
    {
      status: "cancelled",
      count: orders.filter((order) => order.status === "cancelled").length,
    },
  ];
}

function getRecentOrders(
  orders: Order[],
  clients: Client[],
  products: Product[],
  salesReps: SalesRep[],
  limit = 10,
) {
  return [...orders]
    .sort(
      (a, b) =>
        new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime(),
    )
    .slice(0, limit)
    .map((order) => {
      const client = clients.find((client) => client.id === order.clientId);
      const product = products.find(
        (product) => product.id === order.productId,
      );
      const rep = salesReps.find((rep) => rep.id === order.repId);

      return {
        orderId: order.id,
        date: order.orderDate,
        clientName: client?.name ?? "Unknown Client",
        productName: product?.name ?? "Unknown Product",
        repName: rep?.name ?? "Unknown Rep",
        status: order.status,
        revenue: getOrderRevenue(order),
      };
    });
}

export async function getGoogleSheetsDashboardSummary(filters?: SalesFilters) {
  const [departments, salesReps, clients, products, orders, commissionRules] =
    await Promise.all([
      googleSheetsSalesRepository.getDepartments(),
      googleSheetsSalesRepository.getSalesReps(),
      googleSheetsSalesRepository.getClients(),
      googleSheetsSalesRepository.getProducts(),
      googleSheetsSalesRepository.getOrders(),
      googleSheetsSalesRepository.getCommissionRules(),
    ]);

  const filteredOrders = orders.filter((order) =>
    matchesFilters(order, filters),
  );

  const completedOrders = getCompletedOrders(filteredOrders);

  const completedOrdersByClientId = groupOrdersByKey(
    completedOrders,
    (order) => order.clientId,
  );

  const completedOrdersByProductId = groupOrdersByKey(
    completedOrders,
    (order) => order.productId,
  );

  const completedOrdersByRepId = groupOrdersByKey(
    completedOrders,
    (order) => order.repId,
  );

  const completedOrdersByMonth = groupOrdersByKey(completedOrders, (order) =>
    order.orderDate.slice(5, 7),
  );

  const completedOrdersByYear = groupOrdersByKey(completedOrders, (order) =>
    order.orderDate.slice(0, 4),
  );

  const totalRevenue = completedOrders.reduce(
    (total, order) => total + getOrderRevenue(order),
    0,
  );

  return {
    totalOrders: filteredOrders.length,
    completedOrders: completedOrders.length,
    pendingOrders: filteredOrders.filter((order) => order.status === "pending")
      .length,
    cancelledOrders: filteredOrders.filter(
      (order) => order.status === "cancelled",
    ).length,
    totalRevenue,
    averageOrderValue:
      completedOrders.length === 0 ? 0 : totalRevenue / completedOrders.length,

    topClients: getTopClients(clients, completedOrdersByClientId, 5),

    // we will update these one by one next
    topProducts: getTopProducts(products, completedOrdersByProductId, 5),
    departmentRevenue: getDepartmentRevenue(
      filteredOrders,
      departments,
      salesReps,
    ),
    clientTypeRevenue: getClientTypeRevenue(filteredOrders, clients),
    salesRepPerformance: getSalesRepPerformance(
      salesReps,
      completedOrdersByRepId,
    ),
    monthlyRevenueTrend: getMonthlyRevenueTrend(completedOrdersByMonth),
    yearOverYearRevenue: getYearOverYearRevenue(completedOrdersByYear),
    salesRepCommissions: getSalesRepCommissions(
      salesReps,
      completedOrdersByRepId,
      commissionRules,
    ),
    orderStatusBreakdown: getOrderStatusBreakdown(filteredOrders),
    recentOrders: getRecentOrders(
      filteredOrders,
      clients,
      products,
      salesReps,
      10,
    ),

    departments,
    salesReps,
    clients,
    products,
    orders,
    commissionRules,
  };
}
