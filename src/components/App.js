import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route
                exact path={'/main'}
                component={() => <Main />}
          />
          <Route
              exact path={'/login'}
              component={() => <Login />}
          />
          <Route
              exact path={'/logout'}
              component={() => <Logout />}
          />
          <Route
              exact path={'/signup'}
              component={() => <SignUp />}
          />
          <Route
              exact path={'/trainingn'}
              component={() => <Training />}
          />
          <Route
              exact path={'/'}
              component={() => <Main />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
