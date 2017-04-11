import React, { Component } from 'react';
import { Navigator, Text, TouchableHighlight } from 'react-native';
import LoginForm from './components/LoginForm';
import SecondaryForm from './components/SecondaryForm';

class Router extends Component {

  renderScene = (route, navigator) => {
    console.log(route);
    if (route.name === 'Login' || route.index === 0) {
      return <LoginForm navigator={navigator} />;
    } else if (route.name === 'Secondary') {
      return <SecondaryForm navigator={navigator} />;
    }
  }

  renderNavigationBar = () => {
    return (
     <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) => {
           if (index > 0) {
            return (
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => { if (index > 0) { navigator.pop(); } }}
              >
                <Text style={styles.navigationTextStyle}>Back</Text>
              </TouchableHighlight>
            );
          } else {
            return null;
          }
         },
         RightButton: (route, navigator, index, navState) => {
           return null;
         },
         Title: (route, navigator, index, navState) => {
           return (
             <Text style={styles.navigationTextStyle}>
               {route.title}
             </Text>
           );
         },
       }}
     />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Log In', index: 0, name: 'Login' }}
        renderScene={this.renderScene}
        navigationBar={this.renderNavigationBar()}
      />
    );
  }
}

const styles = {
  navigationTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
  }
};

export default Router;
