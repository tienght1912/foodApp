import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './source/screens/Login';
import Home from './source/screens/Home';
import Account from './source/screens/Account';
import BottomTabs from './source/BottomTabs/BottomTabs';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ title: "", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})
