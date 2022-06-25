import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { HP, palette, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';

export const DonoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // paddingHorizontal: WP(5),
    },
    img: {
        width: WP(45),
        height: HP(5),
        // marginVertical:HP(3),
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
    
    donoTxt: {
        fontFamily: fontFamily.boldItalic,
        fontSize: 13,
        lineHeight: 19,
        color: palette.black,
        // marginTop:HP(2)
    },
})