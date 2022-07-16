import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../screens/Splash/splash';
import { NavigationContainer } from '@react-navigation/native';
import { Signup } from '../screens/Signup/Signup';
import Login from '../screens/Login/Login';
import { PasswordReset } from '../screens/PasswordReset/PasswordReset';
import UserInfo from '../screens/UserInfo/userInfo';
import Add from '../screens/AddCase/add';
import { TabNavigator } from './tabNavigator';
import Blood from '../screens/BloodDonation/Blood';
import Money from '../screens/Money/Money';
import Counselling from '../screens/Counselling/counselling';
import Medical from '../screens/Medical/medical';
import StudentHelp from '../screens/StudentHelp/StudentHelp';
import Volunteer from '../screens/Volunteer/volunteer';
import Donation from '../screens/Donations/Donation';
import LoginPhn from '../screens/LoginPhone/LoginPhn';
import OptConfirmation from '../screens/OtpConfirmation/OtpConfirmation';
import showVolunteers from '../screens/Volunteer/showVolunteers';

const MyStack = createStackNavigator();
class Stack extends Component {
  render() {
    return (
        <MyStack.Navigator initialRouteName={'Splash'} screenOptions={{headerShown:false}}>
          <MyStack.Screen name="Splash" component={Splash} />
          <MyStack.Screen name="Login" component={Login} />
          <MyStack.Screen name="LoginPhone" component={LoginPhn} />
          <MyStack.Screen name="OtpConfirmation" component={OptConfirmation} />
          <MyStack.Screen name="Signup" component={Signup} />
          <MyStack.Screen name="PasswordReset" component={PasswordReset} />
          <MyStack.Screen name="UserInfo" component={UserInfo} />
          <MyStack.Screen name="TabNavigator" component={TabNavigator} />
          <MyStack.Screen name="Blood" component={Blood} />
          <MyStack.Screen name="Money" component={Money} />
          <MyStack.Screen name="Counselling" component={Counselling} />
          <MyStack.Screen name="Medical" component={Medical} />
          <MyStack.Screen name="StudentHelp" component={StudentHelp} />
          <MyStack.Screen name="Volunteer" component={Volunteer} />
          <MyStack.Screen name="Donation" component={Donation} />
          <MyStack.Screen name="showVolunteers" component={showVolunteers} />
        </MyStack.Navigator>
    )
  }
}



export default Stack;