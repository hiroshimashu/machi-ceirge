import React from "react";
import { Text, View } from "react-native";
import LoginButton from "./components/loginButton";
import { Provider } from "react-redux";
import AuthScreen from './screens/AuthScreen';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AuthScreen />
      </Provider>
    );
  }
}
