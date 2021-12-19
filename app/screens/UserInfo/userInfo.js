import React from 'react'
import { useState } from 'react';
import { FlatList, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Switch, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { GenderModal } from '../../assets/components/Modal/GenderModal';
import { HP, WP } from '../../assets/config';
import { SVGS } from '../../assets/imgs';
import { saveData } from '../../Auth/fire';
import { InfoStyles as Styles } from './info-style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserInfo = (props) => {
    const [flag, setFlag] = useState('🇵🇰')
    const [gender, setGender] = useState('Male')
    const [phone, setPhone] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [blood, setBlood] = useState('')
    const [active, setActive] = useState(false)
    const [genderMod, setGenderMod] = useState(false)
    const [dialCode, setDialCode] = useState('92')
    const onUpdate=async()=>{
        setActive(true)
        const id=await   AsyncStorage.getItem('id');
       await saveData("Users",id,{
           gender:gender,
           Name:first+last,
           BloodGroup:blood,
           Phone:phone
    })
    setActive(false)
    props.navigation.replace("TabNavigator")
    // const usersCollection = await firestore().collection('Users').get().then((res)=>{
    //     console.log(res);
    // })
    // console.log(usersCollection);
    }
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <ScrollView>
                <CustomHead1  onSave={() => props.navigation.goBack()} txt={'User Data'} onPressArrow={() => props.navigation.goBack()} />
                <View style={{ paddingHorizontal: WP(7) }}>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>First Name<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input onChange={(e)=>setFirst(e)} placeTxt={"First Name"} />
                            <SVGS.userIcon style={{ position: 'absolute', right: WP(5) }} />
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>Last Name<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input onChange={(e)=>setLast(e)} placeTxt={"Last Name"} />
                            <SVGS.userIcon style={{ position: 'absolute', right: WP(5) }} />
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3) }}>
                        <Text style={{ ...Styles.firstTxt }}>Phone Number</Text>
                        <View style={{ marginTop: HP(1), flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                            <TouchableOpacity style={{ width: '30%', justifyContent: 'center' }}>
                                <TextInput editable={false} value={dialCode} placeholderTextColor={'red'} style={{ ...Styles.inp, width: '100%', borderTopLeftRadius: WP(4), borderBottomLeftRadius: WP(4), paddingLeft: WP(9), height: 50 }} />
                                <Text style={{ position: 'absolute', left: WP(3) }}>{flag}</Text>
                            </TouchableOpacity>
                            <TextInput onChangeText={(e)=>setPhone(e)} keyboardType={'number-pad'} placeholder={'Phone Number'} placeholderTextColor={'#B7C1DF'} style={{ ...Styles.inp, width: '70%', borderTopRightRadius: WP(4), borderBottomRightRadius: WP(4), height: 50 }} />
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>Blood Group<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input onChange={(e)=>setBlood(e)} placeTxt={"Blood Group"} />
                            <SVGS.blood style={{ position: 'absolute', right: WP(5) }} />
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>Gender</Text>
                        <Pressable onPress={() => setGenderMod(true)} style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input value={gender} editable placeTxt={"Gender"} />
                            <SVGS.downArrow style={{ position: 'absolute', right: WP(5) }} />
                        </Pressable>
                    </View>
                    <View style={{ width: '100%', alignSelf: 'center', marginTop: HP(8) }}>
                        <CustomBtn1 txt={'Update'} onPress={()=>onUpdate()} />
                        {/* this.props.navigation.navigate('Profile') */}
                    </View>
                </View>
            </ScrollView>
            {active &&
                    <View style={{ width: '100%', height: "100%", backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', }}>
                        <ActivityIndicator size={"large"} color="#00ff00" />
                    </View>
                }
            <GenderModal mod={genderMod} gender={gender} onPress={() => setGenderMod(false)} onPressMale={() => setGender('Male')} onPressFemale={() => setGender('Female')} onPressOther={() => setGender('Other')} />
        </SafeAreaView>
    )
}
export default UserInfo;