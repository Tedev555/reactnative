import React, { Component } from 'react';
import { View, Navigator, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Input, CardSection, Card } from './common';
import { employeeUpdate, employeeCreate } from './../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift, navigator } = this.props;
    this.props.employeeCreate({
      name,
      phone,
      shift: shift || 'Monday',
      navigator
    });
  }

  render() {
    return (
      <View
        style={{
          paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}
      >
        <Card>
          <EmployeeForm {...this.props} />

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
