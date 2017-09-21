import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
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
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props.employees);
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

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
