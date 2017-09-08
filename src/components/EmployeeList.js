import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';

class EmployeeList extends Component {
  render() {
    console.log(this.props);
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
