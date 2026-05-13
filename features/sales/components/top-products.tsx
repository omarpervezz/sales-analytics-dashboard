"use client";

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { formatCurrency } from "@/features/sales/utils/formatters";
import { useChartWidth } from "@/features/sales/hooks/use-chart-width";

type TopProduct = {
  productId: string;
  name: string;
  category: string;
  revenue: number;
};

type Props = {
  data: TopProduct[];
};

export function TopProducts({ data }: Props) {
  const { ref, width, isReady } = useChartWidth();

  if (data.length === 0) {
    return (
      <div className="min-w-0 rounded-xl bg-slate-900 p-5">
        <h2 className="text-lg font-semibold text-white">Top Products</h2>
        <p className="mt-4 text-sm text-slate-400">
          No data found for the selected filters.
        </p>
      </div>
    );
  }

  return (
    <div className="min-w-0 rounded-xl bg-slate-900 p-5">
      <h2 className="text-lg font-semibold text-white">Top Products</h2>

      <div ref={ref} className="mt-4 h-75 w-full min-w-0 overflow-hidden">
        {isReady && (
          <BarChart width={width} height={300} data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

            <XAxis
              type="number"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={{ stroke: "#334155" }}
              tickLine={{ stroke: "#334155" }}
              tickFormatter={(value) => formatCurrency(Number(value))}
            />

            <YAxis
              type="category"
              dataKey="name"
              width={120}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={{ stroke: "#334155" }}
              tickLine={{ stroke: "#334155" }}
            />

            <Tooltip
              formatter={(value) => formatCurrency(Number(value))}
              labelStyle={{ color: "#020617" }}
            />

            <Bar dataKey="revenue" fill="#8b5cf6" radius={[0, 6, 6, 0]} />
          </BarChart>
        )}
      </div>
    </div>
  );
}
