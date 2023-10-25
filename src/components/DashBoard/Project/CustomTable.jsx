import React from "react";
import {
    Link,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.orange,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
      borderBottom: '1px solid #bebebe', // Add a red bottom border
    },
  }));
  

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomTable({ data }) {
  return (
    <TableContainer
      sx={{
        minWidth: 400,
        width: "95%",
        marginLeft: "70px",
        marginTop: "10px",
        marginRight: "50px",
      }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ color: "orange" }} align="left">
              ID
            </StyledTableCell>
            <StyledTableCell sx={{ color: "orange" }} align="left">
              Title
            </StyledTableCell>
            <StyledTableCell sx={{ color: "orange" }} align="left">
              Client
            </StyledTableCell>
            <StyledTableCell sx={{ color: "orange" }} align="left">
              Site Address
            </StyledTableCell>
            <StyledTableCell sx={{ color: "orange" }} align="left">
              Start Date
            </StyledTableCell>
            <StyledTableCell sx={{ color: "orange" }} align="left">
              Complete Date
            </StyledTableCell>
            <StyledTableCell sx={{ color: "orange" }} align="left">
              Status
            </StyledTableCell>
            <StyledTableCell
              sx={{ color: "orange" }}
              align="left"
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell>
              <StyledTableCell align="left">
                <img
                  width="20"
                  height="20"
                  style={{ paddingTop: "6px" }}
                  src="https://img.icons8.com/ios-filled/50/000000/star--v1.png"
                  alt="star--v1"
                />{" "}
                Building1
              </StyledTableCell>
              <StyledTableCell align="left">Fieter Fouche</StyledTableCell>
              <StyledTableCell align="left">157 Dolores Square</StyledTableCell>
              <StyledTableCell align="left">21st August 2022</StyledTableCell>
              <StyledTableCell align="left">4th March 2023</StyledTableCell>
              <StyledTableCell align="left" style={{ color: "#26C6D6" }}>
                Complete
              </StyledTableCell>
              <StyledTableCell align="left">
                <Link href="your-link-here" style={{ color: "primary.light" }}>
                  View
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
