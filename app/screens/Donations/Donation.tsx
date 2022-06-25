import React from 'react'
import { useState } from 'react';
import { FlatList, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Switch, ScrollView, SafeAreaView, ActivityIndicator, ToastAndroid, Image,Linking } from 'react-native';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { GenderModal } from '../../assets/components/Modal/GenderModal';
import { HP, WP } from '../../assets/config';
import { IMAGES, SVGS } from '../../assets/imgs';
import { DonoStyles as Styles } from './donation.styles';

const Donation = (props) => {
    const [location, setLocation] = useState("")

    const toastPrompt = (msg) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            // alert(msg);
        }
    }
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <CustomHead1 txt={"Donations"} onPressArrow={() => { props.navigation.goBack() }} />
            <View style={{ paddingVertical: HP(5) }}>
                <View >
                    <TouchableOpacity onPress={()=>{Linking.openURL(`https://www.jazzcash.com.pk/`)}} style={{ alignItems: 'center', paddingVertical: HP(3),...Styles.shadow }}>
                        <Image resizeMode='cover' source={IMAGES.JazzLogo} style={{ ...Styles.img }} />
                        <Text style={{ ...Styles.donoTxt }}>Send donotions using JazzCash</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL(`https://www.easypaisa.com.pk/`)}} style={{ alignItems: 'center', paddingVertical: HP(3) }}>
                        <Image resizeMode='cover' source={IMAGES.Easypaisa} style={{ ...Styles.img }} />
                        <Text style={{ ...Styles.donoTxt }}>Send donotions using Easypaisa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL(`https://www.paypal.com/`)}} style={{ alignItems: 'center', paddingVertical: HP(3) }}>
                        <Image resizeMode='cover' source={IMAGES.Paypal} style={{ ...Styles.img }} />
                        <Text style={{ ...Styles.donoTxt }}>Send donotions using Paypal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Donation;