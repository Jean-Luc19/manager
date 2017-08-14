import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';

class EmployeeList extends Component {
  static navigationOptions = {
    title: 'EmployeeList'
  }
  render() {
    return (
      <View>
        <Header headerText="Employee List" />
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
      </View>
    );
  }
}

export default EmployeeList;
