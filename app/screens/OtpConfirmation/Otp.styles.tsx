import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { HP, palette, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';

export const OtpStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
        // paddingHorizontal:WP(5)
    },
    whiteView:{
        marginTop:HP(50),
        backgroundColor:'white',
        flex:1,
        borderTopLeftRadius:WP(7),
        borderTopRightRadius:WP(7),
    },
    pasTxt:{
        fontSize:20,
        fontFamily:fontFamily.bold,
        color:palette.black,
    },
    enterTxt:{
        fontSize:17,
        fontFamily:fontFamily.regular,
        lineHeight:22,
        color:palette.black,
    },
})