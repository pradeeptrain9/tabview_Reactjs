import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import datajson from "../datajson.json";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Association() {
  // const [showdata, setshowdata] = React.useState([]);
  // const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
  // const getdata = async () => {
  //   try {
  //     const data = axios.get(apiUrl);
  //     console.log(data.data);
  //     setshowdata(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // React.useEffect(() => {
  //   getdata();
  // }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Attribute Name</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Asset Atrribute name</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
                      <StyledTableRow >
                        <StyledTableCell component="th" scope="row">
                          AIT Pune
                        </StyledTableCell>
                        <StyledTableCell>UA</StyledTableCell>
              <StyledTableCell>AIT Pune</StyledTableCell>
              <StyledTableCell>OA</StyledTableCell>
                      </StyledTableRow>
                
             
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
