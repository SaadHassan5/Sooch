import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { HP, palette, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';

export const InfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
        // paddingHorizontal:WP(5)
        paddingVertical:HP(2)
    },
    
    percentTxt: {
        marginLeft: WP(25),
        fontFamily: fontFamily.regular,
        fontSize: 17,
        color: '#B7C1DF'
    },
    firstTxt: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: palette.black,
        lineHeight: 17,
    },
    inp: {
        fontFamily: fontFamily.regular,
        fontSize: 17,
        borderWidth: 1,
        borderColor: '#B7C1DF',
        // borderRadius: WP(4),
        paddingHorizontal: WP(6),
        backgroundColor: 'white',
        // width: '100%',
        color: 'black',
    },
    dp:{
        width:WP(25),
        height:WP(25),
        borderRadius:WP(3)
    },
    inpp:{
        backgroundColor:'#DBE0EF',
        paddingHorizontal:WP(6),
        borderRadius:WP(1.5),
        fontSize:17,
        fontFamily:fontFamily.regular,
        color:'black'
    }

})