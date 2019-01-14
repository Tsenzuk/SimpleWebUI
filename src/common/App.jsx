import React from 'react';
import { Provider } from 'react-redux';
import Alert from 'react-s-alert';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter, Route, Switch } from 'react-router-dom';

import configureStore from './configureStore';
import theme from './theme';

import MainView from '../main/MainView';
import LoginView from '../login/LoginView';

import 'react-s-alert/dist/s-alert-default.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/main" component={MainView} />
          <Route component={LoginView} />
        </Switch>
        <Alert stack={{ limit: 3 }} />
      </MuiThemeProvider>
    </HashRouter>
  </Provider>
);

export default App;
