"use client";

import { Pie, PieChart, Tooltip } from "recharts";
import { useChartWidth } from "@/features/sales/hooks/use-chart-width";

type OrderStatusBreakdownItem = {
  status: string;
  count: number;
};

type Props = {
  data: OrderStatusBreakdownItem[];
};

const COLORS: Record<string, string> = {
  completed: "#10b981",
  pending: "#f59e0b",
  cancelled: "#ef4444",
};

export function OrderStatusBreakdown({ data }: Props) {
  const { ref, width, isReady } = useChartWidth();

  const total = data.reduce((sum, item) => sum + item.count, 0);

  const chartData = data.map((item) => ({
    ...item,
    fill: COLORS[item.status] ?? "#64748b",
  }));

  if (total === 0) {
    return (
      <div className="min-w-0 rounded-xl bg-slate-900 p-5">
        <h2 className="text-lg font-semibold text-white">
          Order Status Breakdown
        </h2>
        <p className="mt-4 text-sm text-slate-400">
          No data found for the selected filters.
        </p>
      </div>
    );
  }

  return (
    <div className="min-w-0 rounded-xl bg-slate-900 p-5">
      <h2 className="text-lg font-semibold text-white">
        Order Status Breakdown
      </h2>

      <div ref={ref} className="mt-4 h-75 w-full min-w-0 overflow-hidden">
        {isReady && (
          <PieChart width={width} height={300}>
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={4}
            />
            <Tooltip />
          </PieChart>
        )}
      </div>

      <div className="mt-4 space-y-2">
        {chartData.map((item) => {
          const percentage = Math.round((item.count / total) * 100);

          return (
            <div
              key={item.status}
              className="flex justify-between text-sm text-slate-300"
            >
              <span className="capitalize">{item.status}</span>
              <span>
                {item.count} ({percentage}%)
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
