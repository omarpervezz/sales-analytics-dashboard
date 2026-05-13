"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatCurrency } from "@/features/sales/utils/formatters";
import { useChartWidth } from "@/features/sales/hooks/use-chart-width";

type MonthlyRevenueTrendItem = {
  month: string;
  revenue: number;
};

type Props = {
  data: MonthlyRevenueTrendItem[];
};

const MONTH_NAMES: Record<string, string> = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

export function MonthlyRevenueTrend({ data }: Props) {
  const { ref, width, isReady } = useChartWidth();

  const chartData = data.map((item) => ({
    ...item,
    monthLabel: MONTH_NAMES[item.month] ?? item.month,
  }));

  const hasRevenue = data.some((item) => item.revenue > 0);

  return (
    <div className="min-w-0 rounded-xl bg-slate-900 p-5 md:col-span-2">
      <h2 className="text-lg font-semibold text-white">
        Monthly Revenue Trend
      </h2>

      {!hasRevenue ? (
        <p className="mt-4 text-sm text-slate-400">
          No revenue data found for the selected filters.
        </p>
      ) : (
        <div ref={ref} className="mt-4 h-80 w-full min-w-0 overflow-hidden">
          {isReady && (
            <AreaChart width={width} height={320} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

              <XAxis
                dataKey="monthLabel"
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

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.18}
                strokeWidth={2}
              />
            </AreaChart>
          )}
        </div>
      )}
    </div>
  );
}
