import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
import { UserGroupProvider } from "./Providers/UserGroup";

function App() {
  const browserHistory = createBrowserHistory();

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <UserGroupProvider>
          <Routes />
        </UserGroupProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
