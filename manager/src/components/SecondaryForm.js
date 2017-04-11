import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import { Button, CardSection, Card } from './common';

class SecondaryForm extends Component {

  buttonPressed() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View
        style={{
          paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}
      >
        <Card>
          <CardSection>
            <Button onPress={this.buttonPressed.bind(this)}>
              Go Back
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default SecondaryForm;
