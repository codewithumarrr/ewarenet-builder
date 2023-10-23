import React from "react";
import { IconButton, Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../context/color-context";
import empty from "../../assets/icons/empty.svg";
import RegisterProject from "./Project/RegisterProject";

export default function DashBoard() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box component={"div"} sx={{ position: "relative" }}>
      {/* this is the change color button a dummy button */}
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Button onClick={colorMode.toggleColorMode}>change color</Button>{" "}
      </Grid>

      <Box
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
        minHeight="100vh"
      >
        <img src={empty} alt="empty" width={"147px"} height={"146px"} />
        <Typography
          my={2}
          variant="body1"
          color={"text.secondary"}
          align="center"
        >
          You currently have no project in your list
        </Typography>
        <Button>Create Project</Button>
      </Box>
      <RegisterProject />
    </Box>
  );
}
