import * as React from "react";
import { fetchData } from "./utils";

export default function DataTable() {
  const [data, setData] = React.useState([]);
  const [isRTL, setIsRTL] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortColumn, setSortColumn] = React.useState("id");
  const [sortOrder, setSortOrder] = React.useState("asc");

  const handleHeaderClick = (column) => {
    if (column === sortColumn) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const handleToggleClick = () => {
    setIsRTL((prev) => !prev);
  };

  // fetching data from an api usually means syncing our app with ab external system
  // which usually means we should do a useEffect

  React.useEffect(() => {
    async function load() {
      const result = await fetchData();
      setData(result);
    }
    load();
  }, []);

  const filteredData = React.useMemo(() => {
    const term = searchTerm.toLowerCase();
    return data.filter((item) => {
      return (
        String(item.id).includes(term) ||
        item.name.toLowerCase().includes(term) ||
        String(item.weight).includes(term)
      );
    });
  }, [data, searchTerm]);


  const sortedData = React.useMemo(() => {
    const sorted = [...filteredData];
    sorted.sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      if (typeof aVal === "string") {
        const cmp = aVal.localeCompare(bVal);
        return sortOrder === "asc" ? cmp : -cmp;
      }

      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    });
    return sorted;
  }, [filteredData, sortColumn, sortOrder]);


  return (
    <div>
      <header>
        <button className="secondary" onClick={handleToggleClick}>
          Toggle Columns
        </button>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items"
        />
      </header>

      <table className={isRTL ? "rtl" : ""}>
        <thead>
          <tr>
            <th>
              <button
                className="link"
                onClick={() => handleHeaderClick("id")}
                aria-label="ID"
              >
                ID {sortColumn === "id" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
            </th>
            <th>
              <button
                className="link"
                onClick={() => handleHeaderClick("name")}
                aria-label="Name"
              >
                Name{" "}
                {sortColumn === "name" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
            </th>
            <th>
              <button
                className="link"
                onClick={() => handleHeaderClick("weight")}
                aria-label="Weight"
              >
                Weight{" "}
                {sortColumn === "weight" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
