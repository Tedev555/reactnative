import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import { connect } from 'react-redux';
import { Button, Input, CardSection, Card } from './common';
import { employeeUpdate } from './../actions';

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
              value={this.props.name}
              onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Phone"
              placeholder="555-555-5555"
              value={this.props.phone}
              onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
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

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
