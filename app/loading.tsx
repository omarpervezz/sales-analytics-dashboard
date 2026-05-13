import { KpiCardSkeleton } from "@/features/sales/components/kpi-card-skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="h-9 w-64 animate-pulse rounded bg-slate-800" />
          <div className="mt-3 h-5 w-96 animate-pulse rounded bg-slate-800" />
        </div>

        <div className="flex gap-3">
          <div className="h-10 w-32 animate-pulse rounded-lg bg-slate-800" />
          <div className="h-10 w-32 animate-pulse rounded-lg bg-slate-800" />
          <div className="h-10 w-20 animate-pulse rounded-lg bg-slate-800" />
        </div>
      </div>

      <div className="mt-6 h-14 animate-pulse rounded-xl bg-slate-900" />

      <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <KpiCardSkeleton key={index} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="h-90 animate-pulse rounded-xl bg-slate-900"
          />
        ))}
      </div>
    </main>
  );
}
