import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Navigator, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection, Card } from './common';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();
    console.log('Component Will MOUNT');
    this.createDataSource(this.props);
    // console.log('CWillMount');
    // console.log(this.dataSource);
    // console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next props that the component will be rendered with
    // will be rednered with
    // this.props is still the old set of props
    console.log('Component Will Receive Props');
    console.log(`Old: ${this.props.employees.length}, New: ${nextProps.employees.length}`);
    this.createDataSource(nextProps);
    // console.log('CWillReceiveProps');
    // console.log(this.dataSource);
    // console.log(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const updateMe = nextProps.employees.length !== this.props.employees.length;
    console.log(`Should update: ${updateMe}`);
    return updateMe;
  }
  // Not a lifecycle method
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  buttonPressed() {
    this.props.navigator.pop();
  }

  renderRow(employee) {
    console.log(`Render Row: ${employee.name}`);
    return <ListItem employee={employee} navigator={this.props.navigator} />;
  }

  render() {
    // console.log('RENDERING');
    // console.log(this.dataSource);
    return (
      <View
        style={{
          paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}
      >
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('MapStateToProps');
  // console.log(state);
  // for some reason the argument expected is "value, key"
  // perhaps easier to think of: "what is the value model, then what is the key"
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift: 'Monday', name: 'Jane', id: '1234'}
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
