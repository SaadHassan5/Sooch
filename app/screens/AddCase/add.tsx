import React from 'react'
import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, ScrollView, Platform, Pressable } from 'react-native';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { NeedModal } from '../../assets/components/Modal/needModal';
import { HP, WP } from '../../assets/config';
import { SVGS } from '../../assets/imgs';
import { AddStyles as Styles } from './add-style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addData, saveData } from '../../Auth/fire';
import { CityModal } from '../../assets/components/Modal/CityModal';
import { DonorList } from '../../assets/components/Modal/DonorList';

const Add = (props) => {
    const [need, setNeed] = useState("Blood")
    const [location, setLocation] = useState("")
    const [locMod, setlocMod] = useState(false)
    const [donMod, setDonMod] = useState(false)
    const [needMod, setNeedMod] = useState(false)
    const [active, setActive] = useState(false)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [blood, setBlood] = useState("Any")
    const [money, setMoney] = useState("")
    const [bottles, setBottles] = useState(1)
    const [desc, setDesc] = useState("")
    const toastPrompt = (msg) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            // alert(msg);
        }
    }
    const onPost = async () => {

        setDonMod(true)
        if (name.trim() != "" && phone.trim() != "" && desc.trim()) {
            let obj;
            if (need == "Blood") {
                obj = {
                    Name: name,
                    Phone: phone,
                    Need: need,
                    BloodGroup: blood,
                    Bottles: bottles,
                    Description: desc,
                    Location: location,
                }
            }
            else if (need == "Money") {
                obj = {
                    Name: name,
                    Phone: phone,
                    Need: need,
                    Money: money,
                    Description: desc,
                    Location: location,
                }
            }
            else {
                obj = {
                    Name: name,
                    Phone: phone,
                    Need: need,
                    Description: desc,
                    Location: location,
                }

            }
            setActive(true)
            const id = await AsyncStorage.getItem('id');
            await saveData("Cases", "", obj);
            setActive(false)
            toastPrompt("Posted !!")
            if (need == 'Blood')
                setDonMod(true)
        }
        else {
            toastPrompt("Enter Name, Phone Number & Description")
        }
    }
    return (
        <SafeAreaView style={{ ...Styles.container, paddingVertical: HP(1) }}>
            <ScrollView contentContainerStyle={{ paddingBottom: HP(20) }}>
                <CustomHead1 onPressArrow={() => props.navigation.goBack()} txt={"Add Your Case"} />
                <View style={{ flex: 1, paddingHorizontal: WP(6), marginTop: HP(5) }}>
                    <Text style={{ ...Styles.nameTxt, }}>Name</Text>
                    <View style={{ marginTop: HP(2) }}>
                        <Input onChange={(e) => setName(e)} placeTxt={"Name"} />
                    </View>

                    <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Phone Number</Text>
                    <View style={{ marginTop: HP(2) }}>
                        <Input onChange={(e) => setPhone(e)} placeTxt={"Phone Number"} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Need<Text style={{ color: 'red' }}>*</Text></Text>
                    <TouchableOpacity onPress={() => setNeedMod(true)} style={{ marginTop: HP(2), justifyContent: 'center', width: '100%' }}>
                        <Input editable value={need} placeTxt={need} />
                        <SVGS.downArrow style={{ position: 'absolute', right: WP(10), }} />
                    </TouchableOpacity>
                    {need == 'Blood' &&
                        <View>
                            <View style={{ marginTop: HP(2) }}>
                                <Input onChange={(e) => setBlood(e)} placeTxt={"Enter Blood Type"} />
                            </View>
                            <View style={{ marginTop: HP(2) }}>
                                <Input value={bottles} keyboardType='number-pad' onChange={(e) => setBottles(e)} placeTxt={"Number of Blood Bottles"} />
                            </View>
                        </View>
                    }
                    {need == "Money" &&
                        <View style={{ marginTop: HP(2) }}>
                            <Input onChange={(e) => setMoney(e)} placeTxt={"Enter Amount"} />
                        </View>
                    }
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Location<Text style={{ color: 'red' }}>*</Text></Text>
                    <Pressable onPress={() => setlocMod(true)} style={{ marginTop: HP(2), justifyContent: 'center' }}>
                        <Input editable value={location} onChange={(e) => setLocation(e)} placeTxt={"Enter Location"} />
                        <SVGS.downArrow style={{ position: 'absolute', right: WP(10), }} />
                    </Pressable>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Case Description</Text>
                    <View style={{ marginTop: HP(2) }}>
                        <TextInput multiline={true} onChangeText={(e) => setDesc(e)} style={{ ...Styles.inp, height: HP(30) }} placeholder={'Description'} />
                    </View>

                    <View style={{ marginTop: HP(5) }}>
                        <CustomBtn1 onPress={() => onPost()} txt={"Post"} />
                    </View>
                </View>
            </ScrollView>
            {active &&
                <View style={{ width: '100%', height: "100%", backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', }}>
                    <ActivityIndicator size={"large"} color="#00ff00" />
                </View>
            }
            <NeedModal mod={needMod} onPress={() => setNeedMod(false)} need={need} onPressBlood={() => setNeed('Blood')} onPressMoney={() => setNeed('Money')} onPressOther={() => setNeed('Other')} />
            <CityModal mod={locMod} setLocation={setLocation} Location={location} onPress={() => setlocMod(false)} setMod={setlocMod} />
            <DonorList mod={donMod} Location={location} onPress={() => setDonMod(false)} />
        </SafeAreaView>
    )
}
export default Add;