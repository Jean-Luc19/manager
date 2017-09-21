import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addEmployee, employeesFetch } from '../actions';

class EmployeeList extends Component {
  static navigationOptions = props => ({
    title: 'Employee List',
    tabBarVisible: false,
    headerRight: (
      <TouchableOpacity onPress={() => props.navigation.dispatch(addEmployee())}>
        <Text>Add</Text>
      </TouchableOpacity>
    )
  });

 componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <View>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
      </View>
    );
  }
}

export default connect(null, { employeesFetch })(EmployeeList);

