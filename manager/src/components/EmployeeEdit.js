import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Navigator, View } from 'react-native';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  state= { showModal: false };

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
    // Note: this doesn't show on the iOS simulator
    Communications.text(phone, `Your upcoming shift is on ${shift}.`);
  }

  onRemovePress() {
    this.setState({ showModal: true });
  }

  onRemoveConfirm() {
    const { navigator } = this.props;
    this.props.employeeDelete({
      uid: this.props.employee.uid,
      navigator
    });
    this.setState({ showModal: false });
  }

  onRemoveCancel() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <View
        style={{
          paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight
        }}
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

          <CardSection>
            <Button onPress={this.onRemovePress.bind(this)}>
              Remove Employee
            </Button>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onRemoveConfirm.bind(this)}
            onDecline={this.onRemoveConfirm.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  {
    employeeUpdate,
    employeeSave,
    employeeDelete
  })(EmployeeEdit);
