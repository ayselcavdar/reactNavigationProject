// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Timeline, Post, Friends} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainComponent() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={Timeline} />
      <Stack.Screen name="PostPage" component={Post} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainComponentPage"
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'green',
        }}>
        <Tab.Screen
          name="FriendsPage"
          component={Friends}
          options={{title: 'Arkadaslar'}}
        />

        <Tab.Screen
          name="MainComponentPage"
          component={MainComponent}
          options={{title: 'Ana Sayfa'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
