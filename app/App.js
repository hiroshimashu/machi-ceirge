import React from 'react';
import { Provider } from 'react-redux';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import thunk from 'redux-thunk';
import { SearchBar } from 'react-native-elements';
import AuthScreen from './screens/AuthScreen';
import FindScreen from './screens/FindScreen';
import GoodScreen from './screens/GoodScreen';
import MyProfileSceen from './screens/MyProfileScreen';
import TalkScreen from './screens/TalkScreen';
import store from './store';

// To do: Make TabScreen unswipable to AuthScreen.
export default class App extends React.Component {
  render() {
    const navigationOptions = ({ navigation }) => {
      return {
        tabBarVisible: false,
        swipeEnabled: false,
        headerLeftContainerStyle: { flex:1 },
        headerLeft: (
          <SearchBar
            editable={false}
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder="検索条件を設定する"
            round
            containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, height: 25, top: -5 }}
            inputStyle = {{ top: -5 }}
          />
        ),
      };
    };

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
        navigationOptions,
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
