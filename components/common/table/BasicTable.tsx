import Link from "next/link";
import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import { ColumnFilter } from "./ColumnFilter";
import { COLUMNS } from "./columns";

export const BasicTable = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
      },

      useFilters,
      useSortBy
    );
  return (
    <div className="">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr
              key={i}
              className="border-neutral-500 border-2"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, i) => (
                <th
                  key={i}
                  className="px-4 py-2 border-neutral-500 border-2 text-neutral-700"
                >
                  <div
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}

                    <span className="flex flex-col">
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "🔽"
                          : "🔼"
                        : "🔽🔼"}
                    </span>
                  </div>

                  <div className=" p-4">
                    {column.canFilter ? column.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);

            return (
              <tr
                className="cursor-pointer hover:bg-neutral-500"
                key={i}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, i) => {
                  return (
                    <Link key={i} href={`/customers/${cell.row.values.id}`}>
                      <td
                        className="text-center border-neutral-500 border-2"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    </Link>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
