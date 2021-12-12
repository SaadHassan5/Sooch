import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../screens/Splash/splash';
import { NavigationContainer } from '@react-navigation/native';
import { Signup } from '../screens/Signup/Signup';
import Login from '../screens/Login/Login';
import { PasswordReset } from '../screens/PasswordReset/PasswordReset';

const MyStack = createStackNavigator();
class Stack extends Component {
  render() {
    return (
        <MyStack.Navigator initialRouteName={'Splash'} screenOptions={{headerShown:false}}>
          <MyStack.Screen name="Splash" component={Splash} />
          <MyStack.Screen name="Login" component={Login} />
          <MyStack.Screen name="Signup" component={Signup} />
          <MyStack.Screen name="PasswordReset" component={PasswordReset} />
        </MyStack.Navigator>
    )
  }
}



export default Stack;