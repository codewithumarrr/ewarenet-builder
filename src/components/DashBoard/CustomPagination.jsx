import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./CustomPagination.css"; // Import the CSS file

const customStyles = {
    paginationContainer: {
      display: "flex",
      justifyContent: "flex-start",
    //   backgroundColor: '#FB8134',
    align:'left',
    position: "absolute",
    bottom: 0,
    left: 0,
   
    },
    div:{
        border: 'NONE', // Add border style
      borderRadius: '4px', // Add border radius for rounded corners
      padding: '4px', // Add padding to create some space
      alignItems: 'flex-start',
      backgroundColor: '#2B2B2B'
    }
  };
  
  export default function CustomPagination({ count, page, onChange }) {
    return (
      <Stack spacing={2}>
        <div style={customStyles.paginationContainer}>
        <Pagination
        count={5}
        page={page}
        onChange={onChange}
        shape="rounded"
        boundaryCount={1}
        siblingCount={1}
        sx={{
          '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#FB8134', // Color for the active page
          },
          '& .MuiPaginationItem-page': {
            backgroundColor: '#2B2B2B',
          },
          '& .MuiPaginationItem-icon': {
            backgroundColor: '#FB8134',  // Color for the arrow buttons
          },
        }}
      />
          <div style={customStyles.div} >
            10/page
          </div>
        </div>
      </Stack>
    );
  }
  