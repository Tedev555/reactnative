import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC5bXfys91bHJnMK0K1vpxnWRqt7ERL7ac',
      authDomain: 'manager-46417.firebaseapp.com',
      databaseURL: 'https://manager-46417.firebaseio.com',
      projectId: 'manager-46417',
      storageBucket: 'manager-46417.appspot.com',
      messagingSenderId: '72008678352'
    };
    firebase.initializeApp(config);
  }

  render() {
    // Second arg is initial state, if any
    // Third arg is a store enhancer.
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
