import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCyH3ozIwFkxqKzW1ZaHPuZhfEKJ0Lk7wc',
      authDomain: 'auth-47dad.firebaseapp.com',
      databaseURL: 'https://auth-47dad.firebaseio.com',
      storageBucket: 'auth-47dad.appspot.com',
      messagingSenderId: '1080732268494'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
