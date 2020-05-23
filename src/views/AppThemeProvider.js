import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#03A9F4',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#ffffff'
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#FF80AB',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffffff'
    },
  },
});


function AppThemeProvider(props) {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
