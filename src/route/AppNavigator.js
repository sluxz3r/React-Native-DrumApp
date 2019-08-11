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
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
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
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        title: 'Achievement',
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
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        title: 'PROFILE',
      },
    }
  );
  
  
  const switchNavigator = createBottomTabNavigator(
    {
      Play: { screen: HomeStack },
      Achievement: { screen: LeaderStack },
      Profile: { screen: AuthStack },
      
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Play') {
            iconName = `logo-game-controller-b`;
          } else if (routeName === 'Achievement') {
            iconName = `md-ribbon`;
          } else if (routeName === 'Profile') {
            iconName = `md-contact`;
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