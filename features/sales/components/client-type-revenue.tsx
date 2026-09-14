"use client";

import { Pie, PieChart, Tooltip } from "recharts";
import { formatCurrency } from "@/features/sales/utils/formatters";
import { useChartWidth } from "@/features/sales/hooks/use-chart-width";

type ClientTypeRevenueItem = {
  type: string;
  revenue: number;
};

type Props = {
  data: ClientTypeRevenueItem[];
};

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#a855f7", "#ef4444"];

export function ClientTypeRevenue({ data }: Props) {
  const { ref, width, isReady } = useChartWidth();

  const total = data.reduce((sum, item) => sum + item.revenue, 0);

  const chartData = data.map((item, index) => ({
    ...item,
    fill: COLORS[index % COLORS.length],
  }));

  if (total === 0) {
    return (
      <div className="min-w-0 rounded-xl bg-slate-900 p-5">
        <h2 className="text-lg font-semibold text-white">
          Revenue by Client Type
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
        Revenue by Client Type
      </h2>

      <div ref={ref} className="mt-4 h-75 w-full min-w-0 overflow-hidden">
        {isReady && (
          <PieChart width={width} height={300}>
            <Pie
              data={chartData}
              dataKey="revenue"
              nameKey="type"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={4}
            />
            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
          </PieChart>
        )}
      </div>

      <div className="mt-4 space-y-2">
        {chartData.map((item) => {
          const percentage = Math.round((item.revenue / total) * 100);

          return (
            <div
              key={item.type}
              className="flex justify-between text-sm text-slate-300"
            >
              <span className="capitalize">{item.type}</span>
              <span className="font-semibold text-white">
                {formatCurrency(item.revenue)} ({percentage}%)
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
