import React from 'react';
import { ColorModeContext } from "../../../context/color-context";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import KeyboardArrowDownIcon
import SearchIcon from "@mui/icons-material/Search";

function Header() {
    const colorMode = React.useContext(ColorModeContext);
  return (
    <Box component={'div'} sx={{ position: 'relative' }}>
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
            top: '10px',
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
            top: '10px',
            right: '0',
          }}
        >
          <Button onClick={colorMode.toggleColorMode}>Change color</Button> {/* Define colorMode */}
          john joe
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
      </div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '0 10px',
          marginTop: '50px',
        }}
      >
        <TextField
      label="Search client"
      variant="outlined"
      size="small"
      sx={{
        color: (theme) => theme.palette.primary.light,
        marginLeft: '70px',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: true, // Keep the label inside when focused
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
            value={1}
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
    </Box>
  );
}

export default Header;
