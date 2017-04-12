import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <BrowserRouter>
      <div>
        <div className="top-bar">
          <p className="top-bar-left"><Link to="/">React App</Link></p>
          <p className="top-bar-right"><Link to="/login">Login</Link></p>
          <p className="top-bar-right"><Link to="/signup">Sign Up</Link></p>
        </div>

        <hr />

        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </div>

    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('react-app')
);
