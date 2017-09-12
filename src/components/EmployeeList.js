import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import { addEmployee } from '../actions';

class EmployeeList extends Component {
  static navigationOptions = props => ({
    title: 'Employee List',
    tabBarVisible: false,
    headerRight: <Button onPress={() => props.navigation.dispatch(addEmployee())}>Add</Button>
  });

  render() {
    console.log('component', this.props.addEmployee);
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

export default connect()(EmployeeList);
// EmployeeList.navigationOptions = props => {
//   return {
//     title: 'Employee List',
//     headerRight: (
//       <Button
//         onPress={() => {
//           console.log('button', props);
//         }}
//       >
//         Add
//       </Button>
//     )
//   };
// };
