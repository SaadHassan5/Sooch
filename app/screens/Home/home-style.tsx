import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { HP, palette, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
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
    dp: {
        width: WP(18),
        height: WP(18),
        borderRadius: WP(9),
    },
    inp: {
        width: WP(70),
        // height:HP(12),
        borderRadius: WP(4),
        paddingHorizontal: WP(10),
        paddingVertical: HP(2),
        // borderWidth:1,
        backgroundColor: 'white'
    },
    feedTxt: {
        fontSize: 14,
        lineHeight: 17,
        fontFamily: fontFamily.semi_bold,
    },
    touchFeed: {
        paddingHorizontal: WP(5),
        paddingVertical: HP(1),
        // borderBottomWidth:1
    },
    nameTxt: {
        fontFamily: fontFamily.medium,
        fontSize: 16,
        lineHeight: 19,
        color: palette.black,
    },
    sharedTxt: {
        fontFamily: fontFamily.regular,
        fontSize: 12,
        color: '#B7C1DF'
    },
    img: {
        width: '100%',
        height: HP(15),
        borderTopLeftRadius: WP(4),
        borderTopRightRadius: WP(4),
        marginTop: WP(2),
    },
    totalView: {
        width: WP(40),
        // backgroundColor:'red',
        // justifyContent:'center',
        // alignItems:'center',
    },
    pointView: {
        backgroundColor: '#7E9DFE',
        paddingVertical: HP(2),
        borderRadius: WP(10),
        marginTop: HP(1),
    },
    levelView: {
        backgroundColor: '#EDF3FE',
        // justifyContent:'center',
        padding: WP(3),
        borderRadius: WP(5),
    },
    bulbView: {
        backgroundColor: 'white',
        paddingHorizontal: WP(2),
        paddingTop: WP(2),
        borderRadius: WP(2)
    },
    cardView: {
        backgroundColor: 'white',
        marginTop: HP(3),
        padding: WP(3),
        borderRadius: WP(4),
        marginHorizontal: WP(10)
    }
})