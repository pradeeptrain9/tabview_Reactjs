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

export default function PolicyConfiguration() {
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
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell >Name</StyledTableCell>
              <StyledTableCell >Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datajson.map((item) => {
              return (
                <>
                  {item.nodes.map((node) => {
                    return (
                      <StyledTableRow key={node.nodeID}>
                        <StyledTableCell component="th" scope="row">
                          {node.nodeID}
                        </StyledTableCell>
                        <StyledTableCell>{node.name}</StyledTableCell>
                        <StyledTableCell>{node.type}</StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </>
                // <StyledTableRow key={item.policyID}>
                //   <StyledTableCell component="th" scope="row">
                //     {item.policyID}
                //   </StyledTableCell>
                //   <StyledTableCell >{item.nodes.map(node => {
                //     return (
                //       <div>{node.name}</div>
                //     )
                //   })}</StyledTableCell>
                //   <StyledTableCell >{item.nodes.map(node => {
                //     return (
                //       <div>{node.type}</div>
                //      )
                //   }) }</StyledTableCell>
                // </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
