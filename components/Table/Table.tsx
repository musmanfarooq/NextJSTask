import DataTable from "react-data-table-component";

interface TableProps {
  title?: string;
  data: any;
  colums: any;
}

const Table = (props: TableProps) => {
  return (
    <DataTable
      title={props.title}
      columns={props.colums}
      data={props.data}
      pagination
    />
  );
};

export default Table;
