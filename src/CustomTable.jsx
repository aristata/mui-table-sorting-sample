import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableSortLabel,
  Paper
} from "@mui/material";

const CustomTable = ({ data, sortBy, sortOrder, requestSort }) => {
  // console.log("data", data);
  // console.log("sortBy", sortBy);
  // console.log("sortOrder", sortOrder);
  return (
    <React.Fragment>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortBy === "id"}
                  direction={sortOrder}
                  onClick={() => requestSort("id")}
                >
                  id
                </TableSortLabel>
              </TableCell>
              <TableCell>first_name</TableCell>
              <TableCell>last_name</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === "age"}
                  direction={sortOrder}
                  onClick={() => requestSort("age")}
                >
                  age
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, indx) => {
              return (
                <TableRow key={indx}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.first_name}</TableCell>
                  <TableCell>{item.last_name}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>{item.age}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter />
        </Table>
      </Paper>
    </React.Fragment>
  );
};
export default CustomTable;
