import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';

import HomeScreen from '../screens/Home';
import LeaderScreen from '../screens/LeaderBoard';

import AuthScreen from '../screens/Auth';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ProfileScreen from '../screens/Profile'

const HomeStack = createStackNavigator(
    {
      Home: { screen: HomeScreen },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        title: 'HOME',
      },
    },
  );
  
  const LeaderStack = createStackNavigator(
    {
      Leader: { screen: LeaderScreen },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        title: 'LEADERBOARD',
      },
    }
  );
  
  const AuthStack = createStackNavigator(
    {
      Auth: {screen : AuthScreen},
      Login: {screen : LoginScreen},
      Register : {screen : RegisterScreen },
      Profile: {screen : ProfileScreen}
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        title: 'PROFILE',
      },
    }
  );
  
  
  const switchNavigator = createBottomTabNavigator(
    {
      
      Home: { screen: HomeStack },
      Leader: { screen: LeaderStack },
      Auth: { screen: AuthStack },
      
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home`;
          } else if (routeName === 'Leader') {
            iconName = `ios-search`;
          } else if (routeName === 'Auth') {
            iconName = `ios-add-circle${focused ? '' : '-outline'}`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      },
    }
  );
  //For React Navigation 2.+ need to export App only
  //export default App;
  //For React Navigation 3.+
  export default createAppContainer(switchNavigator);