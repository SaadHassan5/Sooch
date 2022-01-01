import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HP, WP } from '../assets/config';
import { HomeTab } from '../assets/components/SvgComponent/homeTab';
import fontFamily from '../assets/config/fontFamily';
import { UserTab } from '../assets/components/SvgComponent/userTab';
import { GameTab } from '../assets/components/SvgComponent/gameTab';
import { FindTab } from '../assets/components/SvgComponent/findTab';
import { SVGS } from '../assets/imgs';
import Home from '../screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { PlusTab } from '../assets/components/SvgComponent/plusTab';
import Add from '../screens/AddCase/add';
import Profile from '../screens/Profile/profile';
import { SearchComp } from '../assets/components/SvgComponent/SearchComp';
import See from '../screens/See/See';
const Tab = createBottomTabNavigator();
const Styles = StyleSheet.create({

  txt: {
    // @ts-ignore
    fontFamily: fontFamily.regular,
    fontSize: 10,
  },

  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5, elevation: 5,
  },
  iconView: {
    alignItems: 'center', width: WP(20),
    // height:HP(6)
    // marginVertical:HP(0),
  },
  tab: {
    position: 'absolute',
    backgroundColor: '#B5CEFD',
    left: 20,
    right: 20,
    borderRadius: WP(4),
    // bottom: 15,
    height: HP(9),
    width: WP(90),
    paddingTop: 6,
  },
  icon: {
    marginTop: Platform.OS === 'android' ? -WP(18) : -WP(18),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'android' ? 'transparent' : 'rgba(255,255,255,1)',
    borderRadius: WP(19),

    // marginTop: -WP(15), 
    // justifyContent: 'center', 
    // alignItems: 'center',
    // backgroundColor: 'rgba(255,255,255,1)', 
    // borderRadius: WP(19),
  },

  // position: 'absolute',
  // backgroundColor: '#B5CEFD',
  // left: 20,
  // right: 20,
  // borderRadius: WP(4),
  // bottom: 15,
  // height: HP(7),
  // width: WP(90),
  // paddingTop: 18,



})

const CustomtabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity onPress={onPress} style={{ ...Styles.icon }}>
    <View style={{ width: WP(20), height: WP(20), backgroundColor: Platform.OS === 'android' ? 'rgba(255,255,255,1)' : 'transparent', borderRadius: Platform.OS === 'android' ? WP(19) : 0, }}>
      {/* width: WP(20), height: WP(20)  */}
      {children}
    </View>
  </TouchableOpacity>
)

export class TabNavigator extends Component<any> {

  render() {

    return (
      // <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              ...Styles.tab,
              ...Styles.shadow,
              // elevation: 0,
              // paddingVertical:HP(6)
            }
          }}
        >

          <Tab.Screen name="Home" component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ ...Styles.iconView }}>
                  <HomeTab col={focused ? '#0118B5' : 'white'} />
                  <Text style={{ ...Styles.txt, color: focused ? '#0118B5' : 'white' }}>Home</Text>
                </View>
              ),
            }} />

          <Tab.Screen name="Add" component={Add}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ ...Styles.iconView }}>
                  <PlusTab col={focused ? '#0118B5' : 'white'} />
                  <Text style={{ ...Styles.txt, color: focused ? '#0118B5' : 'white' }}>Add Your Case</Text>
                </View>
              ),
            }} />
            <Tab.Screen name="See" component={See}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ ...Styles.iconView }}>
                  <SearchComp col={focused ? '#0118B5' : 'white'} />
                  <Text style={{ ...Styles.txt, color: focused ? '#0118B5' : 'white' }}>Available</Text>
                </View>
              ),
            }} />
          <Tab.Screen name="ProfileStack" component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ ...Styles.iconView }}>
                  <UserTab col={focused ? '#0118B5' : 'white'} />
                  <Text style={{ ...Styles.txt, color: focused ? '#0118B5' : 'white' }}>Profile</Text>
                </View>
              ),
              // tabBarButton
            }} />
          {/* 
        <Tab.Screen name="SOS" component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{}}>
                <SVGS.sos />
              </View>
            ),
            tabBarButton: (props) => (
              <CustomtabBarButton {...props} />
            )
          }} /> */}


        </Tab.Navigator >
      // </NavigationContainer>
    );
  }

}
