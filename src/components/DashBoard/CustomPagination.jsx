import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const customStyles = {
  paginationContainer: {
    display: "flex",
    justifyContent: "flex-start", // Align the pagination to the left
  },
};

export default function CustomPagination({ count, page, onChange }) {
  return (
    <Stack spacing={2}>
      <div style={customStyles.paginationContainer}>
        <Pagination
          count={count}
          page={page}
          onChange={onChange}
          boundaryCount={1}
          siblingCount={1}
          variant="outlined"
          shape="rounded"
        />
        <div variant="outlined" shape="rounded" style={{display: "flex",justifyContent: "flex-start",paddingTop: "5px"}}>10/page</div>
      </div>
    </Stack>
  );
}
