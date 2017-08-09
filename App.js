import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <LoginForm />
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
