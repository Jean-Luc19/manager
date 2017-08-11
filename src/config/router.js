import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';

export const Tabs = TabNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  Employee: {
    screen: EmployeeList,
    navigationOptions: {
      tabBarLabel: 'Employees',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs
  }
});
