import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Image, ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, ScrollView, Platform, Pressable, FlatList } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { HP, palette, WP } from '../../config';
import fontFamily from '../../config/fontFamily';
import { IMAGES } from '../../imgs';
import { Input } from '../Input/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CongoModal = ({ mod, name = "Saad" }) => {
    const [mode, setMode] = useState(mod)
    useEffect(() => {
    }, [])
    const goProcess = async () => {
       await AsyncStorage.setItem("VolunteerModal","Exist")
        setMode(false)
    }
    return (
        <ReactNativeModal isVisible={mode} onBackButtonPress={() => goProcess()} onBackdropPress={() => goProcess()}>
            <View style={{ width: "90%", height: HP(45), backgroundColor: 'white', alignSelf: 'center', borderRadius: WP(4), paddingHorizontal: WP(5), paddingTop: HP(2) }}>
                <Image source={IMAGES.Shine} style={{ alignSelf: "center", width: WP(30), height: WP(30) }} />
                <Text style={{ fontFamily: fontFamily.semi_bold, fontSize: 20, color: palette.black, textAlign: 'center' }}>Meet our volunteer of the week <Text style={{ fontFamily: fontFamily.boldItalic, color: palette.status_dot_bg_green }}>{name}</Text></Text>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: 15, color: palette.blue, textAlign: 'center' }}>We thanks {name} for his/her services</Text>
                <TouchableOpacity onPress={() => goProcess()} style={{ marginTop: HP(3), alignSelf: 'center', backgroundColor: palette.blue, paddingHorizontal: WP(5), paddingVertical: WP(3), borderRadius: WP(2) }}>
                    <Text style={{ color: palette.white, fontSize: 15, fontFamily: fontFamily.medium }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ReactNativeModal>
    )
}