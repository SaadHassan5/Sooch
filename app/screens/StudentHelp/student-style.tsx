import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { HP, palette, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';

export const StudentHelpStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }, 
    cardView: {
        backgroundColor: 'white',
        marginTop: HP(1),
        padding: WP(3),
        borderRadius: WP(4),
        marginHorizontal: WP(7)
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
    feedTxt: {
        fontSize: 14,
        lineHeight: 17,
        fontFamily: fontFamily.semi_bold,
        color:'black',
        // marginTop:HP(2)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameTxt: {
        fontFamily: fontFamily.light,
        fontSize: 13,
        lineHeight: 19,
        color: palette.black,
        marginTop:HP(2)
    },
})