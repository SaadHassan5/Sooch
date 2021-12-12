import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { HP, palette, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';

export const SettingStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
        // paddingHorizontal:WP(5)
    },
    profileTxt:{
        textAlign:'center',
        fontFamily:fontFamily.bold,
        fontSize:20,
        color:'black',
        paddingTop:HP(2)
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
      iconView:{
        paddingVertical:HP(2),
        paddingHorizontal:WP(4),
        backgroundColor:'#EDF3FE',
        borderRadius:WP(3)
      },
      personalView:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: HP(2)
      }
})