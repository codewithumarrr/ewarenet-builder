import React from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getDesignTokens, getThemedComponents } from './styles/Theme';
import { CssBaseline, Menu } from '@mui/material';
import { ColorModeContext } from './context/color-context';
import DashBoard from './components/DashBoard/DashBoard';
import SideBar from './components/DashBoard/SideBar';
import {Box} from '@mui/material';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import VerificationCode from './components/SignUp/VerificationCode';
import RegisterProfile from './components/SignUp/RegisterProfile';
import Projects from './components/DashBoard/Projects';

export default function App() {

  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (<>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBar />
        <Box ml={'90px'}>
          <Projects />
        </Box>

        {/* <RegisterProfile /> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  </>
  );
}