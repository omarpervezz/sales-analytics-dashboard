"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatCurrency } from "@/features/sales/utils/formatters";
import { useChartWidth } from "@/features/sales/hooks/use-chart-width";

type SalesRepPerformanceItem = {
  repId: string;
  name: string;
  revenue: number;
  targetAmount: number;
  achievementRate: number;
};

type Props = {
  data: SalesRepPerformanceItem[];
};

export function SalesRepPerformance({ data }: Props) {
  const { ref, width, isReady } = useChartWidth();

  if (data.length === 0) {
    return (
      <div className="min-w-0 rounded-xl bg-slate-900 p-5 md:col-span-2">
        <h2 className="text-lg font-semibold text-white">
          Sales Rep Performance
        </h2>
        <p className="mt-4 text-sm text-slate-400">
          No data found for the selected filters.
        </p>
      </div>
    );
  }

  return (
    <div className="min-w-0 rounded-xl bg-slate-900 p-5 md:col-span-2">
      <h2 className="text-lg font-semibold text-white">
        Sales Rep Performance
      </h2>

      <div ref={ref} className="mt-4 h-80 w-full min-w-0 overflow-hidden">
        {isReady && (
          <BarChart width={width} height={320} data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

            <XAxis
              dataKey="name"
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

            <Legend />

            <Bar
              dataKey="revenue"
              name="Revenue"
              fill="#10b981"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="targetAmount"
              name="Target"
              fill="#64748b"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        )}
      </div>

      <div className="mt-4 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
        {data.map((rep) => (
          <div key={rep.repId} className="rounded-lg bg-slate-800/60 p-3">
            <div className="flex justify-between gap-3">
              <span>{rep.name}</span>
              <span className="font-semibold text-white">
                {rep.achievementRate.toFixed(1)}%
              </span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-slate-700">
              <div
                className="h-2 rounded-full bg-emerald-500"
                style={{
                  width: `${Math.min(rep.achievementRate, 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
