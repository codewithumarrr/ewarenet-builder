import React, { useEffect, useState } from "react";
import {
  IconButton,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../context/color-context";
import empty from "../../assets/icons/empty.svg";
import RegisterProject from "./Project/RegisterProject";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination"; // Import Pagination
import Header from "./Project/header";
import CustomTable from "./Project/CustomTable";
import CustomPagination from "./CustomPagination";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.orange,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export default function Projects() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [rowsPerPage] = useState(10); // Rows per page

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <Box component={"div"} sx={{ position: "relative" }}>
   <Header/>

    
   <CustomTable data={paginatedData} />
   <Box
        sx={{
          display: "flex",
          marginLeft: "60px",
          marginTop: "30px",
          
        }}
      >
        {/* Render the CustomPagination component and pass the required props */}
        <CustomPagination                                              
          count={5}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
  
    </Box>
  );
}
