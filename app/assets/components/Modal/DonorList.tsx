import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, ScrollView, Platform, Pressable, FlatList } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { getAllOfCollection } from '../../../Auth/fire';
import { HP, palette, WP } from '../../config';
import { cities } from '../../config/cities';
import fontFamily from '../../config/fontFamily';
import { Input } from '../Input/Input';

export const DonorList = ({mod,  onPress,donors,exist}) => {
    // const [donors, setDonors] = useState([])
    // const [exist, setExist] = useState(false)
    // useEffect(() => {
    //     getDonors();
    // }, [])
    // const getDonors = async () => {
    //     console.log("LOc", loc, Location);

    //     const res = await getAllOfCollection("Users")
    //     console.log("DONOR LIST", res);
    //     let temp = [];
    //     let exi = false
    //     await res.filter(e => {
    //         if (e.Location == Location) {
    //             if (e.BloodDonar) {
    //                 temp.push(e)
    //                 exi = true;
    //             }
    //         }
    //     })
    //     console.log(temp);

    //     setDonors(temp)
    //     setExist(exi)
    // };
    return (
        <ReactNativeModal isVisible={mod} onBackButtonPress={onPress}>
            <View style={{ width: "90%", height: HP(60), backgroundColor: 'white', alignSelf: 'center', borderRadius: WP(4), paddingHorizontal: WP(5), paddingTop: HP(2) }}>
                <Text style={{ fontFamily: fontFamily.semi_bold, color: 'black', fontSize: 20 }}>Donors Available in your city</Text>
                {exist ?
                    <FlatList
                        // padding={30}
                        numColumns={1}
                        data={donors}
                        contentContainerStyle={{ paddingBottom: HP(10), paddingLeft: WP(0), paddingTop: HP(2) }}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <View style={{ paddingVertical: HP(.5), marginTop: HP(.5), borderBottomWidth: .5, paddingBottom: HP(.9), borderColor: palette.onboard_gray }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontFamily: fontFamily.light, color: 'black', fontSize: 14 }}>{item?.Name}</Text>
                                    <Text style={{ fontFamily: fontFamily.light, color: 'black', fontSize: 14 }}>{item?.Phone}</Text>
                                </View>
                                <Text style={{ fontFamily: fontFamily.light, color: 'black', fontSize: 14 }}>Blood Group: {item?.BloodGroup}</Text>
                                {item?.disease ?
                                    <Text style={{ fontFamily: fontFamily.light, fontSize: 14 , color: "red" }}>Donor has a disease</Text>
                                    :
                                    <Text style={{ fontFamily: fontFamily.light, fontSize: 14, color: "green" }}>Donor has no disease</Text>
                                }
                            </View>
                        }
                    />
                    :
                    <View>
                        <Text style={{ fontFamily: fontFamily.light, color: 'black', fontSize: 14, paddingTop: HP(20) }}>Sorry No Donor Available in your city</Text>
                        <ActivityIndicator size={"large"} color={"#666666"} />
                    </View>
                }
            </View>
        </ReactNativeModal>
    )
}