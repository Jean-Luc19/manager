import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
// import { StackNavigator } from 'react-navigation';
import reducers from './src/reducers';
import { Root } from './src/config/router';

class App extends Component {

  static navigationOptions = {
    title: 'Login Form'
  }
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDyy2jghZ4l4rEPRrmJEGipkQcvhGvjNWA',
      authDomain: 'manager-f8c74.firebaseapp.com',
      databaseURL: 'https://manager-f8c74.firebaseio.com',
      projectId: 'manager-f8c74',
      storageBucket: 'manager-f8c74.appspot.com',
      messagingSenderId: '66964058647'
   };

   firebase.initializeApp(config);
  }

  render() {
     function configureStore(initialState) {
      const store = createStore(reducers, initialState, applyMiddleware(ReduxThunk));

      if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./src/reducers', () => {
          const nextRootReducer = reducers;

          store.replaceReducer(nextRootReducer);
      });
    }
      return store;
    }

    return (
      <Provider store={configureStore({})}>
          <Root />
      </Provider>
    );
  }
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
