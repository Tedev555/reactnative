import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Navigator, View } from 'react-native';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift, navigator } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift: shift || 'Monday',
      uid: this.props.employee.uid,
      navigator
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}.`);
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

          <CardSection>
            <Button onPress={this.onTextPress.bind(this)}>
              Text Shift
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

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
