export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span className="flex">
      <input
        className="p-2 border-b-neutral-500 border-b-2 bg-transparent focus:outline-neutral-600"
        placeholder={`Search by ${column.Header}`}
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
