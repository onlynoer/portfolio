import Link from "next/link";
import React from "react";

export interface Column {
  header: string;
  accessor: string | number;
}

interface DataTableProps {
  columns: Column[];
  rows: Array<Record<string, string | number | React.ReactNode>>;
  caption?: string;
  link?: boolean;
  className?: string;
  tableClassName?: string;
}

export function DataTable({ columns, rows, caption, link = false, className, tableClassName }: Readonly<DataTableProps>) {
  if (!columns?.length || !rows?.length) {
    return (
      <div className="rounded-xl border border-mainAccent bg-mainSurface p-6 shadow-sm">
        <p className="text-sm text-mainText">No table data available.</p>
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto rounded-xl border border-mainAccent ${className ? className : ""}`}>
        <table className={`w-full table-fixed border-collapse text-left text-sm text-mainText ${tableClassName ? tableClassName : ""}`}>
          {caption ? <caption className="sr-only">{caption}</caption> : null}
            <thead className="sticky top-0 text-mainOtherText bg-mainBgSecondary rounded-xl">
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="border-b border-mainAccent px-4 py-3 text-xs font-semibold uppercase tracking-widest break-words"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-slate-50 dark:bg-mainBgSecondary/30" : "bg-white dark:bg-mainBgSecondary/5"}
                  >
                    {columns.map((column, columnIndex) => (
                      <td
                        key={`${rowIndex}-${column.accessor}`}
                        className="break-words whitespace-normal border-b border-slate-200 dark:border-slate-900 px-4 py-3 text-sm leading-6"
                      >
                        {columnIndex === 0 && row[column.accessor] && link ? (
                          <Link href={`/samples/${row[column.accessor]}`} className="text-mainPrimary">{row[column.accessor] ?? "-"}</Link>
                          ) : row[column.accessor] ?? "-" }
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}
