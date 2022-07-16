import React from 'react'
import { useEffect } from 'react';
import { ActivityIndicator, ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { getData, getDataCase } from '../../Auth/fire';
import { MoneyStyles as Styles } from './money-style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { HP, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';
import { SVGS } from '../../assets/imgs';

const Money = (props) => {
    const [data, setData] = useState([])
    const [exist, setExist] = useState(false)
    useEffect(() => {
        getCase();
    }, [])
    const getCase = async () => {
        let exi = false;
        const id = await AsyncStorage.getItem("id");
        console.log("id", id);
        const res = await getDataCase("Cases")
        console.log(res);
        await res.filter(e => {
            if (e.Need == "Money")
                exi = true
        })
        setExist(exi)
        setData(res);
    }
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <CustomHead1 txt={"Money Needs"} onPressArrow={() => { props.navigation.goBack() }} />
            {!exist ?
                <Text style={{ ...Styles.feedTxt, alignSelf: 'center', marginTop: HP(40) }}>No Record Found</Text>
                :
                <ScrollView contentContainerStyle={{ paddingBottom: HP(10) }}>
                    {data?.map((item, i) =>
                        <View key={i}>
                            {item.Need == "Money" &&
                                <View style={{ ...Styles.cardView, ...Styles.shadow, marginTop: HP(5) }}>
                                    <View style={{ ...Styles.row, justifyContent: 'space-between' }}>
                                        <Text style={{ ...Styles.feedTxt }}>{item.Name}</Text>
                                        <Text style={{ ...Styles.feedTxt }}>{item.Phone}</Text>
                                    </View>
                                    <View style={{ ...Styles.row, justifyContent: 'space-between' }}>
                                        <Text style={{ ...Styles.nameTxt }}>Money Required: <Text style={{ ...Styles.nameTxt, fontFamily: fontFamily.bold }}>{item?.Money}</Text></Text>
                                    </View>
                                    <View style={{}}>
                                        {item.AccountName &&
                                            <Text style={{ ...Styles.nameTxt }}>Account Name: <Text style={{ ...Styles.nameTxt, fontFamily: fontFamily.bold }}>{item?.AccountName}</Text></Text>
                                        }
                                        {item.Account &&
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Text style={{ ...Styles.nameTxt }}>Account No: <Text style={{ ...Styles.nameTxt, fontFamily: fontFamily.bold }}>{item?.Account}</Text></Text>
                                                <TouchableOpacity onPress={()=>{props.navigation.navigate('Donation')}}>
                                                    <Text style={{ ...Styles.nameTxt, textDecorationLine: "underline", color: 'green' }}>Send Donations</Text>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                    </View>
                                    <View style={{ ...Styles.row, }}>
                                        <SVGS.location width={WP(4)} height={WP(4)} style={{  }} />
                                        <Text style={{ ...Styles.nameTxt, fontFamily: fontFamily.bold, paddingLeft: WP(3) }}>{item?.district}</Text>
                                    </View>
                                    <Text style={{ ...Styles.nameTxt }}>{item?.Description}</Text>
                                </View>
                            }
                        </View>
                    )}
                </ScrollView>
            }
        </SafeAreaView>
    )
}
export default Money;