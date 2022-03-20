import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { HP, palette, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';

export const VolunteerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
    },
    feedTxt: {
        fontSize: 14,
        lineHeight: 17,
        fontFamily: fontFamily.semi_bold,
        color:'black'
    },
    nameTxt:{
        fontFamily:fontFamily.semi_bold,
        fontSize:14,
        color:'black'
    },
    inp: {
        fontFamily: fontFamily.regular,
        fontSize: 17,
        borderWidth: 1,
        borderColor: '#B7C1DF',
        borderRadius: WP(4),
        paddingHorizontal: WP(6),
        color:palette.black,
        height:55,
        // width: '100%',
      }
})