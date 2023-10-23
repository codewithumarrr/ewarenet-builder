import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Link, TextField, Typography } from "@mui/material";
import React from "react";
function RegisterProject() {
  const theme = useTheme();
  return (
    <Box
      component={"div"}
      bgcolor={theme.palette.primary.main}
      sx={{
        height: "100vh",
        width: "50%",
        padding: "2rem 2rem",
        position: "absolute",
        right: "0",
        top: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: theme.palette.primary.light,
        }}
      >
        <Typography component="h2">Create Project</Typography>
        <Box component={"span"}> X </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Link
          sx={{ color: theme.palette.primary.light, textDecoration: "none" }}
          color={theme.palette.primary.light}
        >
          Project Info
        </Link>
        <Link
          sx={{ color: theme.palette.primary.light, textDecoration: "none" }}
        >
          User
        </Link>
      </Box>
      <Divider
        sx={{ margin: "0 0 10px 0", color: theme.palette.primary.gray }}
      />
      <Box component={"form"} sx={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem'}}>
        <TextField
          label="Project Name"
          fullWidth
          variant="outlined"
          size="small"
          sx={{color: theme.palette.primary.light, backgroundColor: "#646464", border: '1px solid #646464', borderRadius: '10px'}}
        />
        <TextField
          label="Site Address"
          fullWidth
          variant="outlined"
          size="small"
          sx={{color: "#fff", backgroundColor: "#646464", border: '1px solid #646464', borderRadius: '10px'}}
        />
        <TextField
          label="Project Description"
          fullWidth
          variant="outlined"
          size="small"
          sx={{color: "#fff", backgroundColor: "#646464", border: '1px solid #646464', borderRadius: '10px'}}
        />
        <TextField
          label="Project Budget"
          fullWidth
          variant="outlined"
          size="small"
          sx={{color: "#fff", backgroundColor: "#646464", border: '1px solid #646464', borderRadius: '10px'}}
        />
        <TextField
          label="Project Start Date"
          fullWidth
          variant="outlined"
          size="small"
          sx={{color: "#fff", backgroundColor: "#646464", border: '1px solid #646464', borderRadius: '10px'}}
        />
        <TextField
          label="Project Deadline"
          fullWidth
          variant="outlined"
          size="small"
          sx={{color: "#fff", backgroundColor: "#646464", border: '1px solid #646464', borderRadius: '10px'}}
        />
        <Divider sx={{margin: "1"}}/>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: '1rem'}}>
            <Button variant="text" sx={{backgroundColor: 'transparent'}}>Cancel</Button>
            <Button>Proceed</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterProject;
