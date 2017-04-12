import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import { Button, Input, CardSection, Card } from './common';

class EmployeeCreate extends Component {

  render() {
    return (
      <View
        style={{
          paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}
      >
        <Card>

          <CardSection>
            <Input
              label="Name"
              placeholder="Jane"
            />
          </CardSection>

          <CardSection>
            <Input
              label="Phone"
              placeholder="555-555-5555"
            />
          </CardSection>

          <CardSection>
          </CardSection>

          <CardSection>
            <Button>
              Create
            </Button>
          </CardSection>

        </Card>
      </View>
    );
  }
}

export default EmployeeCreate;
