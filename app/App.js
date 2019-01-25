import React from 'react';
import { Provider } from 'react-redux';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import thunk from 'redux-thunk';
import AuthScreen from './screens/AuthScreen';
import FindScreen from './screens/FindScreen';
import GoodScreen from './screens/GoodScreen';
import MyProfileSceen from './screens/MyProfileScreen';
import TalkScreen from './screens/TalkScreen';
import store from './store';

export default class App extends React.Component {
  render() {
    const TabScreen = createBottomTabNavigator({
      Find: FindScreen,
      Good: GoodScreen,
      Talk: TalkScreen,
      MyProfile: MyProfileSceen,
    });

    const MainNavigator = createStackNavigator({
      Auth: {
        screen: AuthScreen,
        navigationOptions: {
          header: null,
        },
      },
      Tab: {
        screen: TabScreen,
        navigationOptions: {
          tabBarVisible: false,
          headerLeft: null,
        },
      },
    });
    const MainScreen = createAppContainer(MainNavigator);
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
