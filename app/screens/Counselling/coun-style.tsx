import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { HP, palette, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';

export const CounStyles = StyleSheet.create({
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
})