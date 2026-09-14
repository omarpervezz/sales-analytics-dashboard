"use client";

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { formatCurrency } from "@/features/sales/utils/formatters";
import { useChartWidth } from "@/features/sales/hooks/use-chart-width";

type YearOverYearRevenueItem = {
  year: string;
  revenue: number;
};

type Props = {
  data: YearOverYearRevenueItem[];
};

export function YearOverYearRevenue({ data }: Props) {
  const { ref, width, isReady } = useChartWidth();

  const hasRevenue = data.some((item) => item.revenue > 0);

  if (!hasRevenue) {
    return (
      <div className="min-w-0 rounded-xl bg-slate-900 p-5">
        <h2 className="text-lg font-semibold text-white">YoY Revenue</h2>
        <p className="mt-4 text-sm text-slate-400">
          No revenue data found for the selected filters.
        </p>
      </div>
    );
  }

  return (
    <div className="min-w-0 rounded-xl bg-slate-900 p-5">
      <h2 className="text-lg font-semibold text-white">YoY Revenue</h2>

      <div ref={ref} className="mt-4 h-75 w-full min-w-0 overflow-hidden">
        {isReady && (
          <BarChart width={width} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

            <XAxis
              dataKey="year"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={{ stroke: "#334155" }}
              tickLine={{ stroke: "#334155" }}
            />

            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={{ stroke: "#334155" }}
              tickLine={{ stroke: "#334155" }}
              tickFormatter={(value) => formatCurrency(Number(value))}
            />

            <Tooltip
              formatter={(value) => formatCurrency(Number(value))}
              labelStyle={{ color: "#020617" }}
            />

            <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        )}
      </div>
    </div>
  );
}
