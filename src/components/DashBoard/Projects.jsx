import React from "react";
import { IconButton, Box, Grid, Typography, Button, TextField, Select, InputLabel, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../context/color-context";
import empty from "../../assets/icons/empty.svg";
import RegisterProject from "./Project/RegisterProject";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    // backgroundColor: theme.palette.action.hover,
  },
}));

function createData(ID, Name, Client, Site, Start_Date, Complete_Date, Status) {
  return { ID, Name, Client, Site, Start_Date, Complete_Date, Status };
}

const rows = [
  createData(171, "Building 1", 6.0, 24, 4.0,'Active','view'),
  createData(172, "Building 2", 9.0, 37, 4.3,'Complete','view'),
  createData(173, "Building 3", 16.0, 24, '--','Complete','view'),
  createData(174, "Building 4", 3.7, 67, 4.3,'Complete','view'),
  createData(175, "Building 5", 16.0, 49, 3.9,'Complete','view'),
];

export default function Projects() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box component={"div"} sx={{ position: "relative" }}>
      {/* Change color button */}
      {/* <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Button onClick={colorMode.toggleColorMode}>Change color</Button>
      </Grid> */}

      {/* "Projects" section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '2px',
          position: 'relative',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '22px',
            fontWeight: 700,
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'left',
            width: '95px',
            height: '27px',
            position: 'absolute',
            top: '10px', // Adjust this value to move it down
            left: '70px',
          }}
        >
          Projects
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            position: 'absolute',
            top: '10px', // Adjust this value to move it down
            right: '0',
          }}
        >
          <Button onClick={colorMode.toggleColorMode}>Change color</Button>
          john joe
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
      </div>

      <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between', // This will place one input at the start and one at the end
        alignItems: 'center', // Center items vertically
        width: '100%',  // This ensures it takes the entire width
        padding: '0 10px', // Add some horizontal spacing
        marginTop: '50px',
        
      }}
    >
      <TextField
        label="Start Field"
        variant="outlined"
        size="small"
        sx={{
          color: (theme) => theme.palette.primary.light,
          marginLeft: '70px',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          
        }}
      >
        <Select
          variant="outlined"
          size="small"
          label="End Field"
          value={1} // Set the value to 1 to pre-select "Option 1"
          sx={{
            color: (theme) => theme.palette.primary.light,
            marginRight: '5px',
          }}
        >
          <MenuItem value={1}>Status</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </Select>

        <Button variant="contained" color="primary">
          Create
        </Button>
      </Box>
    </Box>
    <TableContainer sx={{ minWidth: 400,
    width: '95%',
      marginLeft: '70px',
      marginTop: '10px',
      marginRight: '50 px'
       }} component={Paper}  >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '15px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'orange',
  }} align="left"
>
  ID
</StyledTableCell>
            <StyledTableCell 
            sx={{
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '15px',
              letterSpacing: '0em',
              // textAlign: 'left',
              color: 'orange',
            }} align="right">Name</StyledTableCell>
            <StyledTableCell 
             sx={{
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '15px',
              letterSpacing: '0em',
              // textAlign: 'left',
              color: 'orange',
            }} align="right">Client</StyledTableCell>
            <StyledTableCell
             sx={{
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '15px',
              letterSpacing: '0em',
              // textAlign: 'left',
              color: 'orange',
            }} align="right">Site Address</StyledTableCell>
            <StyledTableCell 
             sx={{
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '15px',
              letterSpacing: '0em',
              // textAlign: 'left',
              color: 'orange',
            }}align="right">Start Date</StyledTableCell>
            <StyledTableCell 
             sx={{
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '15px',
              letterSpacing: '0em',
              // textAlign: 'left',
              color: 'orange',
            }}align="right">Complete Date</StyledTableCell>
            <StyledTableCell 
             sx={{
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '15px',
              letterSpacing: '0em',
              // textAlign: 'left',
              color: 'orange',
            }}align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell component="th" scope="row">
                {row.ID}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.Client}</StyledTableCell>
              <StyledTableCell align="right">{row.Site}</StyledTableCell>
              <StyledTableCell align="right">{row.Start_Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Complete_Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>


  );
}
