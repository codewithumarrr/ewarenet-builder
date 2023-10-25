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
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1658 5.58814H10.1268L8.59582 1.01814C8.55647 0.911797 8.48549 0.820063 8.39243 0.755277C8.29937 0.690491 8.18871 0.655762 8.07532 0.655762C7.96193 0.655762 7.85127 0.690491 7.75821 0.755277C7.66515 0.820063 7.59417 0.911797 7.55482 1.01814L6.02282 5.58814H0.95182C0.806644 5.58866 0.667564 5.64657 0.564908 5.74922C0.462252 5.85188 0.404347 5.99096 0.40382 6.13614C0.403583 6.16709 0.406939 6.19796 0.41382 6.22814C0.421198 6.30562 0.445649 6.38052 0.485417 6.44743C0.525185 6.51435 0.579282 6.57162 0.64382 6.61514L4.78482 9.53414L3.19382 14.1551C3.1562 14.2647 3.15412 14.3833 3.18788 14.4941C3.22164 14.6049 3.28951 14.7022 3.38182 14.7721C3.46724 14.849 3.57534 14.896 3.68982 14.9061C3.8133 14.8975 3.932 14.8549 4.03282 14.7831L8.07482 11.9021L12.1168 14.7801C12.2169 14.8534 12.336 14.8961 12.4598 14.9031C12.5722 14.8942 12.6781 14.8469 12.7598 14.7691C12.853 14.6999 12.9215 14.6026 12.9554 14.4916C12.9892 14.3805 12.9866 14.2616 12.9478 14.1521L11.3588 9.53114L15.4658 6.58514L15.5658 6.49914C15.6494 6.42579 15.7075 6.32776 15.7316 6.21923C15.7558 6.1107 15.7448 5.9973 15.7003 5.89542C15.6558 5.79354 15.58 5.70847 15.4839 5.65251C15.3878 5.59655 15.2764 5.5726 15.1658 5.58414V5.58814Z" fill="#EDE416"/>
</svg>{" "}
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
