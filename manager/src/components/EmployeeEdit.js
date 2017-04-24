import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigator, View } from 'react-native';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);
  }

  render() {
    return (
      <View
        style={{
          paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}
      >
        <Card>
          <EmployeeForm />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changes
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
