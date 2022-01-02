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
import { getAllOfCollection } from '../../Auth/fire';
import { CityModal } from '../../assets/components/Modal/CityModal';
import { DonorList } from '../../assets/components/Modal/DonorList';
import { useEffect } from 'react';
import { SearchComp } from '../../assets/components/SvgComponent/SearchComp';

const See = (props) => {
    const [donars, setDonars] = useState([])
    const [data, setData] = useState([])
    const [active, setActive] = useState(true)
    useEffect(() => {
        // setActive(true);
        const unsubscribe = props.navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            getDonor();
        });
    }, [donars, setDonars])
    const getDonor = async () => {
        console.log('caaled');

        let temp = [];
        const res = await getAllOfCollection("Users");
        // console.log('res don', res);
        await res?.filter(e => {
            if (e?.BloodDonar)
                temp.push(e)
        })
        setDonars(temp)
        setData(temp)
        setActive(false);
    }
    const filterDonar = async (searchText) => {
        let filteredData = data.filter(function (item) {

            return item?.BloodGroup?.toLowerCase()?.includes(searchText?.toLowerCase());
        });
        setDonars(filteredData)
    }
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <ScrollView contentContainerStyle={{ marginTop: HP(1), paddingBottom: HP(18) }}>
                <CustomHead1 txt={"Available Donors"} onPressArrow={() => props.navigation.goBack()} />
                <View style={{ paddingHorizontal: WP(7), }}>
                    <View style={{ marginTop: HP(2), justifyContent: 'center' }}>
                        <Input placeTxt={"Serach Donar by blood group"} onChange={(e) => filterDonar(e)} />
                        <View style={{ position: 'absolute', right: WP(8) }}>
                            <SearchComp col={'blue'} />
                        </View>
                    </View>
                    {donars.map((item, i) =>
                        <View style={{ ...Styles.cardView, ...Styles.shadow, marginTop: HP(3) }}>
                            <Text style={{ ...Styles.nameTxt }}>Donor Name: {item?.Name}</Text>
                            <Text style={{ ...Styles.nameTxt, marginTop: WP(2) }}>Blood Group: {item?.BloodGroup}</Text>
                            <View style={{ marginTop: WP(2) }}>
                                {item?.LastDonated?.toLowerCase() == "less than 3 months ago" ?
                                    <Text style={{ ...Styles.nameTxt, color: 'red' }}>Last time Donated Blood: {item?.LastDonated?.toUpperCase()}</Text>
                                    :
                                    <Text style={{ ...Styles.nameTxt }}>Last time Donated Blood: {item?.LastDonated?.toUpperCase()}</Text>
                                }
                            </View>
                            <Text style={{ ...Styles.feedTxt, marginTop: WP(2) }}>Contact: {item?.Phone}</Text>
                        </View>
                    )}
                </View>
            </ScrollView>

            {active &&
                <View style={{ width: '100%', height: "100%", backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', }}>
                    <ActivityIndicator size={"large"} color="#00ff00" />
                </View>
            }
        </SafeAreaView>
    )
}
export default See;