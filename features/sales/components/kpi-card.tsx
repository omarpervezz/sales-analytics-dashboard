type KpiCardProps = {
  title: string;
  value: string | number;
};

export function KpiCard({ title, value }: KpiCardProps) {
  return (
    <div className="rounded-xl bg-slate-900 p-5 shadow">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
