import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

function App() {
  const browserHistory = createBrowserHistory();

  return (
    <ThemeProvider theme={theme}>
     <Router history={browserHistory}>
          <Routes />
        </Router>
    </ThemeProvider>
  );
}

export default App;
