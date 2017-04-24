import React, { Component } from 'react';
import { Navigator, Text, TouchableHighlight } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import { LOGIN_FORM, EMPLOYEE_LIST, EMPLOYEE_CREATE } from './routes';

class Router extends Component {

  renderScene = (route, navigator) => {
    console.log(route);
    if (route.name === LOGIN_FORM.name || route.index === 0) {
      return <LoginForm navigator={navigator} />;
    } else if (route.name === EMPLOYEE_LIST.name) {
      return <EmployeeList navigator={navigator} />;
    } else if (route.name === EMPLOYEE_CREATE.name) {
      return <EmployeeCreate navigator={navigator} />;
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
          }
          return null;
         },
         RightButton: (route, navigator, index, navState) => {
           if (route.name === 'EmployeeList') {
             return (
               <TouchableHighlight
                 underlayColor="transparent"
                 onPress={() => {
                   if (index > 0) {
                     navigator.push(EMPLOYEE_CREATE);
                   }
                 }}
               >
                 <Text style={styles.navigationTextStyle}>Add</Text>
               </TouchableHighlight>
            );
           }
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
    marginLeft: 6,
    marginRight: 6
  }
};

export default Router;
