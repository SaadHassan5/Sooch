import React from 'react'
import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, ScrollView, Platform, Pressable } from 'react-native';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { NeedModal } from '../../assets/components/Modal/needModal';
import { HP, WP } from '../../assets/config';
import { SVGS } from '../../assets/imgs';
import { SeeStyles as Styles } from './see-style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addData, getAllOfCollection, getDonors, saveData } from '../../Auth/fire';
import { CityModal } from '../../assets/components/Modal/CityModal';
import { DonorList } from '../../assets/components/Modal/DonorList';
import { useEffect } from 'react';

const See = (props) => {
    const [donars, setDonars] = useState([])
    useEffect(() => {
        getDonor();
    })
    const getDonor = async () => {
        const res = await getAllOfCollection("Users");
        console.log('res don', res);
        setDonars(res)
    }
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <CustomHead1 txt={"Available Donors"} onPressArrow={() => props.navigation.goBack()} />
            <ScrollView contentContainerStyle={{ paddingHorizontal: WP(7), marginTop: HP(4),paddingBottom:WP(5) }}>
                {donars.map((item, i) =>
                    <View style={{ ...Styles.cardView, ...Styles.shadow, marginTop: HP(3) }}>
                        <Text style={{ ...Styles.nameTxt }}>Donor Name: {item?.Name}</Text>
                        <Text style={{ ...Styles.nameTxt,marginTop:WP(2) }}>Blood Group: {item?.BloodGroup}</Text>
                        <View style={{marginTop:WP(2)}}>
                            {item?.LastDonated?.toLowerCase()=="less than 3 months ago" ?
                                <Text style={{ ...Styles.nameTxt,color:'red'}}>Last time Donated Blood: {item?.LastDonated?.toUpperCase()}</Text>
                                :
                                <Text style={{ ...Styles.nameTxt }}>Last time Donated Blood: {item?.LastDonated?.toUpperCase()}</Text>
                            }
                        </View>
                        <Text style={{ ...Styles.feedTxt,marginTop:WP(2)}}>Contact: {item?.Phone}</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}
export default See;