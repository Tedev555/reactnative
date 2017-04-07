import React, { Component } from 'react';
import { Navigator } from 'react-native';
import LoginForm from './components/LoginForm';

class Router extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Log In', index: 0 }}
        renderScene={(route, navigator) =>
          <LoginForm />
        }
      />
    );
  }
}

export default Router;
