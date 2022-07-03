import React, { useEffect } from 'react'
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
import { Checkbox, RadioButton } from 'react-native-paper';
import { CityModal } from '../../assets/components/Modal/CityModal';
import { LastModal } from '../../assets/components/Modal/LastModal';
import DocumentPicker from "react-native-document-picker";
import storage from '@react-native-firebase/storage';
import UploadIcon from "react-native-vector-icons/MaterialIcons"
import { CommonActions } from '@react-navigation/native';

const UserInfo = (props) => {
    const [location, setLocation] = useState("")
    const [locMod, setlocMod] = useState(false)
    const [lastMod, setLastMod] = useState(false)
    const [flag, setFlag] = useState('🇵🇰')
    const [gender, setGender] = useState('Male')
    const [phone, setPhone] = useState((props.route.params?.number.split('92'))[1]||'')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [blood, setBlood] = useState('')
    const [bloodDur, setBloodDur] = useState('Never Donated')
    const [active, setActive] = useState(false)
    const [genderMod, setGenderMod] = useState(false)
    const [dialCode, setDialCode] = useState('92')
    const [mark, setMark] = useState(true);
    const [disease, setDisease] = useState(true);
    const [doc, setDoc] = useState('');
    const onUpdate = async () => {
        if (gender != '' && first.trim() != "" && last.trim() != "" && phone.trim() != "" && location.trim() != "" ) {
            setActive(true)
            const id = await AsyncStorage.getItem('id');
            await saveData("Users", id, {
                gender: gender,
                Name: first + " " + last,
                BloodGroup: blood,
                Phone: phone,
                BloodDonar: mark,
                Location: location,
                LastDonated: bloodDur,
                disease: disease,
            })
            setActive(false)
             props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'TabNavigator' },
              ]
            })
          );
        }
        else
            toastPrompt("Enter required data!!!")
    }
    const pickDoc = async () => {
        try {
            const results = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
                //There can me more options as well find above
            });
            for (const res of results) {
                //Printing the log realted to the file
                console.log('res : ' + JSON.stringify(res));
                console.log('URI : ' + res.uri);
                console.log('Type : ' + res.type);
                console.log('File Name : ' + res.name);
                console.log('File Size : ' + res.size);
                setDoc('' + res.name);
            }
            //Setting the state to show multiple file attributes
            // this.setState({ multipleFile: results });
        } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                //   alert('Canceled from multiple doc picker');
            } else {
                //For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
        // let reference = storage().ref('ISSB Complete book (1).pdf');         // 2
        // let task = reference.putFile('content://com.android.providers.media.documents/document/document%3A11534');               // 3

        // task.then(() => {                                 // 4
        //     console.log('Image uploaded to the bucket!');
        // }).catch((e) => console.log('uploading image error => ', e));
    }
    const toastPrompt = (msg) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            // alert(msg);
        }
    }
    useEffect(()=>{
        console.log(props.route.params);
        
    },[])
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <ScrollView>
            {/* onSkip={() => props.navigation.replace("TabNavigator")} */}
                <CustomHead1  txt={'User Data'}  />
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
                            <TextInput onChangeText={(e) => setPhone(e)} value={phone} keyboardType={'number-pad'} placeholder={'Phone Number'} placeholderTextColor={'#B7C1DF'} style={{ ...Styles.inp, width: '70%', borderTopRightRadius: WP(4), borderBottomRightRadius: WP(4), height: 50 }} />
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>Gender</Text>
                        <Pressable onPress={() => setGenderMod(true)} style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input value={gender} editable placeTxt={"Gender"} />
                            <SVGS.downArrow style={{ position: 'absolute', right: WP(5) }} />
                        </Pressable>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>Location</Text>
                        <Pressable onPress={() => setlocMod(true)} style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input editable value={location} onChange={(e) => setLocation(e)} placeTxt={"Enter Location"} />
                            <SVGS.downArrow style={{ position: 'absolute', right: WP(5), }} />
                        </Pressable>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>Blood Group<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input onChange={(e) => setBlood(e)} placeTxt={"Blood Group"} />
                            <SVGS.blood style={{ position: 'absolute', right: WP(5) }} />
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: HP(3), }}>
                        <Text style={{ ...Styles.firstTxt }}>Last Time Donated Blood</Text>
                        <Pressable onPress={() => setLastMod(true)} style={{ justifyContent: 'center', marginTop: HP(1) }}>
                            <Input value={bloodDur} editable placeTxt={"Blood Dur"} />
                            <SVGS.downArrow style={{ position: 'absolute', right: WP(5) }} />
                        </Pressable>
                    </View>
                    <Text style={{ ...Styles.firstTxt, marginTop: HP(2) }}>Do you have any disease?</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                        <TouchableOpacity onPress={() => { setDisease(true) }} style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ ...Styles.firstTxt }}>Yes</Text>
                            <RadioButton status={disease ? 'checked' : "unchecked"} onPress={() => { setDisease(true) }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setDisease(false) }} style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ ...Styles.firstTxt }}>No</Text>
                            <RadioButton status={disease ? 'unchecked' : "checked"} onPress={() => { setDisease(false) }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => pickDoc()} style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', }}>
                            {doc ?
                                <Text style={{ ...Styles.firstTxt }}>{doc}</Text>
                                :
                                <Text style={{ ...Styles.firstTxt }}>Upload Health Certificate</Text>
                            }
                            <UploadIcon name='file-upload' color={'black'} size={25} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => setMark(!mark)} style={{ ...Styles.row, marginTop: HP(2) }}>
                        <Checkbox
                            status={mark ? 'checked' : 'unchecked'}
                            uncheckedColor='red'
                            color='#B7C1DF'
                        />
                        <Text style={{ ...Styles.firstTxt }}>Mark yourself as available blood donor</Text>
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
            <CityModal mod={locMod} setLocation={setLocation} Location={location} onPress={() => setlocMod(false)} setMod={setlocMod} />
            <LastModal mod={lastMod} blood={bloodDur} onPress={() => setLastMod(false)} onPress1={() => setBloodDur('3 Months or before')} onPress2={() => setBloodDur('Less than 3 Months ago')} onPressOther={() => setBloodDur('Never Donated')} />
        </SafeAreaView>
    )
}
export default UserInfo;