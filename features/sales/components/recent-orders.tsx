import { formatCurrency } from "@/features/sales/utils/formatters";

type RecentOrder = {
  orderId: string;
  date: string;
  clientName: string;
  productName: string;
  repName: string;
  status: string;
  revenue: number;
};

type Props = {
  data: RecentOrder[];
};

const STATUS_CLASSES: Record<string, string> = {
  completed: "bg-emerald-500/10 text-emerald-400",
  pending: "bg-amber-500/10 text-amber-400",
  cancelled: "bg-red-500/10 text-red-400",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function RecentOrders({ data }: Props) {
  if (data.length === 0) {
    return (
      <div className="rounded-xl bg-slate-900 p-5 md:col-span-2">
        <h2 className="text-lg font-semibold text-white">Recent Orders</h2>
        <p className="mt-4 text-sm text-slate-400">
          No data found for the selected filters.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-slate-900 p-5 md:col-span-2">
      <h2 className="text-lg font-semibold text-white">Recent Orders</h2>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="pb-3">Date</th>
              <th className="pb-3">Client</th>
              <th className="pb-3">Product</th>
              <th className="pb-3">Rep</th>
              <th className="pb-3">Status</th>
              <th className="pb-3 text-right">Revenue</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800 text-slate-300">
            {data.map((order) => (
              <tr key={order.orderId}>
                <td className="py-3 whitespace-nowrap">
                  {formatDate(order.date)}
                </td>
                <td className="py-3">{order.clientName}</td>
                <td className="py-3">{order.productName}</td>
                <td className="py-3">{order.repName}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${
                      STATUS_CLASSES[order.status] ??
                      "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 text-right font-semibold text-white">
                  {formatCurrency(order.revenue)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
