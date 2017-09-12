import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import { addEmployee } from '../actions';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Employee List',
    tabBarVisible: false,
    headerRight: (
      <Button
        onPress={() => {
          console.log('button', this.props);
        }}
      >
        Add
      </Button>
    )
  };
  onAddPress() {
    console.log('hello');
    this.props.addEmployee();
  }
  render() {
    console.log('component', this.props);
    return (
      <View>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
      </View>
    );
  }
}
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

export default connect(null, { addEmployee })(EmployeeList);
