import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCyH3ozIwFkxqKzW1ZaHPuZhfEKJ0Lk7wc',
      authDomain: 'auth-47dad.firebaseapp.com',
      databaseURL: 'https://auth-47dad.firebaseio.com',
      storageBucket: 'auth-47dad.appspot.com',
      messagingSenderId: '1080732268494'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({ loggedIn: true });
      } else {
        console.log(user);
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={() => firebase.auth().signOut()}
            >
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner size="large" /></CardSection>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
