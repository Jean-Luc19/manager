import React from 'react';
import { TabNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';

export const EmployeeStack = StackNavigator(
  {
    Employee: {
      screen: EmployeeList,
      navigationOptions: {
        tabBarLabel: 'Employees',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      }
    },
    EmployeeCreate: {
      screen: EmployeeCreate
    }
  },
  { headerMode: 'float' }
);

export const Tabs = TabNavigator(
  {
    Employees: {
      screen: EmployeeStack
    },
    Login: {
      screen: LoginForm,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      }
    }
  },
  {
    animationEnabled: true
  }
);

const RootNavigationWithState = ({ dispatch, nav }) =>
  <Tabs
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />;

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(RootNavigationWithState);
