import { getGoogleSheetsDashboardSummary } from "@/features/sales/services/sales-dashboard-service";
import { ClientTypeRevenue } from "@/features/sales/components/client-type-revenue";
import { DepartmentRevenue } from "@/features/sales/components/department-revenue";
import { KpiCard } from "@/features/sales/components/kpi-card";
import { MonthlyRevenueTrend } from "@/features/sales/components/monthly-revenue-trend";
import { OrderStatusBreakdown } from "@/features/sales/components/order-status-breakdown";
import { RecentOrders } from "@/features/sales/components/recent-orders";
import { SalesRepCommissions } from "@/features/sales/components/sales-rep-commissions";
import { SalesRepPerformance } from "@/features/sales/components/sales-rep-performance";
import { TopClients } from "@/features/sales/components/top-clients";
import { TopProducts } from "@/features/sales/components/top-products";
import { YearOverYearRevenue } from "@/features/sales/components/year-over-year-revenue";
import { formatCurrency } from "@/features/sales/utils/formatters";
import { DashboardFilters } from "@/features/sales/components/dashboard-filters";

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<{
    year?: string;
    repId?: string;
  }>;
}) {
  const params = await searchParams;

  const filters = {
    year: params?.year ?? "all",
    repId: params?.repId ?? "all",
  };

  const dashboard = await getGoogleSheetsDashboardSummary(filters);

  const years = Array.from(
    new Set(dashboard.orders.map((order) => order.orderDate.slice(0, 4))),
  ).sort((a, b) => Number(b) - Number(a));

  const selectedRepName =
    filters.repId === "all"
      ? "all sales reps"
      : (dashboard.salesReps.find((rep) => rep.id === filters.repId)?.name ??
        "selected sales rep");

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sales Dashboard</h1>
          <p className="mt-2 text-slate-400">
            Track sales, clients, products, reps, commissions, and trends.
          </p>
        </div>

        <DashboardFilters
          salesReps={dashboard.salesReps}
          selectedYear={filters.year}
          selectedRepId={filters.repId}
          years={years}
        />
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300">
        Showing results for{" "}
        <strong>{filters.year === "all" ? "all years" : filters.year}</strong>{" "}
        and <strong>{selectedRepName}</strong>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        <KpiCard title="Total Orders" value={dashboard.totalOrders} />
        <KpiCard title="Completed" value={dashboard.completedOrders} />
        <KpiCard title="Pending" value={dashboard.pendingOrders} />
        <KpiCard title="Cancelled" value={dashboard.cancelledOrders} />
        <KpiCard
          title="Revenue"
          value={formatCurrency(dashboard.totalRevenue)}
        />
        <KpiCard
          title="Avg Order"
          value={formatCurrency(Math.round(dashboard.averageOrderValue))}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <MonthlyRevenueTrend data={dashboard.monthlyRevenueTrend} />
        <TopClients data={dashboard.topClients} />
        <TopProducts data={dashboard.topProducts} />
        <DepartmentRevenue data={dashboard.departmentRevenue} />
        <ClientTypeRevenue data={dashboard.clientTypeRevenue} />
        <YearOverYearRevenue data={dashboard.yearOverYearRevenue} />
        <OrderStatusBreakdown data={dashboard.orderStatusBreakdown} />
        <SalesRepPerformance data={dashboard.salesRepPerformance} />
        <SalesRepCommissions data={dashboard.salesRepCommissions} />
        <RecentOrders data={dashboard.recentOrders} />
      </div>
    </main>
  );
}
