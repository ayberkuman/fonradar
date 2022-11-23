import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Company Name",
    accessor: "companyName",
    Filter: ColumnFilter,
  },
  {
    Header: "Tax Number",
    accessor: "taxNumber",
    Filter: ColumnFilter,
  },
  {
    Header: "Tax Office",
    accessor: "taxOffice",
  },
];
