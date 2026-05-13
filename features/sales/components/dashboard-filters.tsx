"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { SalesRep } from "@/features/sales/types/sales";

type Props = {
  salesReps: SalesRep[];
  selectedYear: string;
  selectedRepId: string;
  years: string[];
};

export function DashboardFilters({
  salesReps,
  selectedYear,
  selectedRepId,
  years,
}: Props) {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const searchParams = useSearchParams();

  function updateFilter(key: "year" | "repId", value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const queryString = params.toString();
    const href = queryString ? `/?${queryString}` : "/";

    startTransition(() => {
      router.replace(href);
    });
  }

  function resetFilters() {
    if (!hasActiveFilters) return;

    startTransition(() => {
      router.replace("/");
    });
  }

  const isLoading = isPending;
  const hasActiveFilters = selectedYear !== "all" || selectedRepId !== "all";

  return (
    <>
      {isLoading && (
        <div
          role="status"
          aria-live="polite"
          aria-label="Updating dashboard"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 backdrop-blur-md"
        >
          <div className="flex min-w-72 flex-col items-center rounded-2xl border border-slate-700/80 bg-slate-900/95 px-8 py-6 text-center shadow-2xl">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-blue-500" />

            <p className="mt-4 text-base font-medium text-white">
              Updating dashboard
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Applying your selected filters...
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <select
          disabled={isLoading}
          value={selectedYear}
          onChange={(event) => updateFilter("year", event.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          <option value="all">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          disabled={isLoading}
          value={selectedRepId}
          onChange={(event) => updateFilter("repId", event.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          <option value="all">All Reps</option>
          {salesReps.map((rep) => (
            <option key={rep.id} value={rep.id}>
              {rep.name}
            </option>
          ))}
        </select>

        <button
          type="button"
          disabled={isLoading || !hasActiveFilters}
          onClick={resetFilters}
          className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Reset
        </button>
      </div>
    </>
  );
}
