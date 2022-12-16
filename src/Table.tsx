import React, { useMemo } from "react";
import { useTable } from "react-table";
import { IUser } from "./Types";

type Props = {
  data: IUser[];
};

const columns = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "abbreviation",
    accessor: "abbreviation",
  },
  {
    Header: "capital",
    accessor: "capital",
  },
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "phone",
    accessor: "phone",
  },
  {
    Header: "population",
    accessor: "population",
  },
  {
    Header: "flag",
    accessor: "media.flag",
  },
  {
    Header: "emblem",
    accessor: "media.emblem",
  },
  {
    Header: "orthographic",
    accessor: "media.orthographic",
  },
]; 


function Table(props: Props) {

  const data = useMemo(() => props.data, [props.data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table className="table table-striped table-sm table-hover table-bordered">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} scope="col">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
