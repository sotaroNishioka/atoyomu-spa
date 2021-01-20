import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, responsiveFontSizes } from '@material-ui/core';
import App from './page/App';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#595959',
      },
      info: {
        main: '#61dafb',
      },
    },
  })
);

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
