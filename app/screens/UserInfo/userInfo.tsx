import React from 'react'
import { useState } from 'react';
import { FlatList, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Switch, ScrollView, SafeAreaView, ActivityIndicator, ToastAndroid } from 'react-native';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { GenderModal } from '../../assets/components/Modal/GenderModal';
import { HP, WP } from '../../assets/config';
import { SVGS } from '../../assets/imgs';
import { saveData } from '../../Auth/fire';
import { InfoStyles as Styles } from './info-style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';
import { CityModal } from '../../assets/components/Modal/CityModal';

const UserInfo = (props) => {
    const [location, setLocation] = useState("")
    const [locMod, setlocMod] = useState(false)
    const [flag, setFlag] = useState('🇵🇰')
    const [gender, setGender] = useState('Male')
    const [phone, setPhone] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [blood, setBlood] = useState('')
    const [active, setActive] = useState(false)
    const [genderMod, setGenderMod] = useState(false)
    const [dialCode, setDialCode] = useState('92')
    const [mark, setMark] = useState(true);
    const onUpdate = async () => {
        if (gender != '' && first.trim() != "" && last.trim() != "" && phone.trim() != "" && location.trim()!="") {
            setActive(true)
            const id = await AsyncStorage.getItem('id');
            await saveData("Users", id, {
                gender: gender,
                Name: first +" "+ last,
                BloodGroup: blood,
                Phone: phone,
                BloodDonar: mark,
                Location:location,
            })
            setActive(false)
            props.navigation.replace("TabNavigator")
        }
        else
        toastPrompt("Enter required data!!!")
    }
    
const toastPrompt = (msg) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
        // alert(msg);
    }
}
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <ScrollView>
                <CustomHead1 onSave={() => props.navigation.goBack()} txt={'User Data'} onPressArrow={() => props.navigation.goBack()} />
                <View style={{ paddingHorizontal: WP(7) }}>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>First Name<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input onChange={(e) => setFirst(e)} placeTxt={"First Name"} />
                            <SVGS.userIcon style={{ position: 'absolute', right: WP(5) }} />
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>Last Name<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input onChange={(e) => setLast(e)} placeTxt={"Last Name"} />
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
                            <TextInput onChangeText={(e) => setPhone(e)} keyboardType={'number-pad'} placeholder={'Phone Number'} placeholderTextColor={'#B7C1DF'} style={{ ...Styles.inp, width: '70%', borderTopRightRadius: WP(4), borderBottomRightRadius: WP(4), height: 50 }} />
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>Blood Group<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input onChange={(e) => setBlood(e)} placeTxt={"Blood Group"} />
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
                    <Pressable onPress={()=>setlocMod(true)} style={{ marginTop: HP(2),justifyContent:'center' }}>
                        <Input editable value={location} onChange={(e) => setLocation(e)} placeTxt={"Enter Location"} />
                        <SVGS.downArrow style={{ position: 'absolute', right: WP(10), }} />
                    </Pressable>
                    <TouchableOpacity onPress={() => setMark(!mark)} style={{ ...Styles.row, marginTop: HP(2) }}>
                        <Checkbox
                            status={mark ? 'checked' : 'unchecked'}
                            uncheckedColor='red'
                            color='#B7C1DF'
                        />
                        <Text style={{ ...Styles.firstTxt }}>Mark yourself as available blood donar</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', alignSelf: 'center', marginTop: HP(8) }}>
                        <CustomBtn1 txt={'Update'} onPress={() => onUpdate()} />
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
            <CityModal mod={locMod} setLocation={setLocation} Location={location}  onPress={()=>setlocMod(false)} setMod={setlocMod}/>
        </SafeAreaView>
    )
}
export default UserInfo;