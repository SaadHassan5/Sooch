import React, { useEffect } from 'react'
import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, ScrollView, Platform, Pressable, Linking, PermissionsAndroid } from 'react-native';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { NeedModal } from '../../assets/components/Modal/needModal';
import { HP, WP } from '../../assets/config';
import { SVGS } from '../../assets/imgs';
import { AddStyles as Styles } from './add-style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addData, getAllOfCollection, saveData } from '../../Auth/fire';
import { CityModal } from '../../assets/components/Modal/CityModal';
import { DonorList } from '../../assets/components/Modal/DonorList';
import AlertService from '../../Services/alertService';
import { showLocation } from 'react-native-map-link'
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler'
import Icon from "react-native-vector-icons/MaterialIcons"
import { VoltModal } from '../../assets/components/Modal/VolModal';
import { connect } from 'react-redux';
import { ChangeBackgroundColor, GetUser, GetVolun } from '../../root/action';
const Add = (props) => {
    const [need, setNeed] = useState("Blood")
    const [location, setLocation] = useState(false)
    const [loc, setLoc] = useState("")
    const [volt, setVolt] = useState({})
    const [volMod, setVolMod] = useState(false)
    const [locMod, setlocMod] = useState(false)
    const [donMod, setDonMod] = useState(false)
    const [needMod, setNeedMod] = useState(false)
    const [active, setActive] = useState(false)
    const [name, setName] = useState("")
    const [institue, setInstitute] = useState("")
    const [phone, setPhone] = useState("")
    const [cnic, setCnic] = useState("")
    const [blood, setBlood] = useState("Any")
    const [money, setMoney] = useState("")
    const [account, setAccount] = useState("")
    const [accountName, setAccountName] = useState("")
    const [bottles, setBottles] = useState(1)
    const [desc, setDesc] = useState("")
    const [exist, setExist] = useState(false)
    const [donors, setDonors] = useState([])
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    const toastPrompt = (msg) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            // alert(msg);
        }
    }
    const onPost = async () => {
        // setDonMod(true)
        if (name.trim() != "" && phone.trim() != "" && desc.trim()) {
            let obj = {};
            AlertService.confirm("Press OK to post this case!!").then(async (res) => {
                if (res) {
                    obj = {
                        Name: name,
                        Phone: phone,
                        Need: need,
                        Description: desc,
                        // CNIC: cnic,
                        district: loc,
                    }
                    if (need == "Blood") {
                        obj = {
                            ...obj,
                            BloodGroup: blood,
                            Bottles: bottles,
                            Position: position,
                        }
                    }
                    else if (need == "Money") {
                        obj = {
                            ...obj,
                            Money: money,
                            AccountName: accountName,
                            Account: account,
                        }
                    }
                    else if (need == "Education") {
                        obj = {
                            ...obj,
                            Institue: institue,
                        }
                    }
                    console.log(obj);
                    if(volt!=""){
                        await saveData("Volunteer", volt?.email, {
                            points:parseInt(volt?.points) + 1,
                        })
                    }
                    setActive(true)
                    const id = await AsyncStorage.getItem('id');
                    await saveData("Cases", "", obj);
                    setActive(false)
                    toastPrompt("Posted !!")
                    if (need == 'Blood') {
                        await getDonors()
                        setDonMod(true)

                    }
                }
            })
        }
        else {
            toastPrompt("Enter Name, Phone Number & Description")
        }
    }
    const getDonors = async () => {

        const res = await getAllOfCollection("Users")
        console.log("DONOR LIST", res);
        let temp = [];
        let exi = false
        await res.filter(e => {
            if (e.Location == loc) {
                if (e.BloodDonar) {
                    temp.push(e)
                    exi = true;
                }
            }
        })
        console.log(temp);

        setDonors(temp)
        setExist(exi)
    };
    const openLocation = async () => {

        AlertService.confirm("Are you sure you want to give your location?").then(async (res) => {
            if (res) {
                RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
                    interval: 10000,
                    fastInterval: 5000,
                })
                    .then(async (data) => {
                        await Geolocation.getCurrentPosition(async (pos) => {
                            console.log('poz', pos);

                            const crd = pos.coords;
                            setPosition({
                                latitude: crd.latitude,
                                longitude: crd.longitude,
                                latitudeDelta: 0.0421,
                                longitudeDelta: 0.0421,
                            });
                            setLocation(true)
                        })
                    })
                    .catch((err) => { })
            }
        })

    }
    useEffect(() => {
    }, [])

    return (
        <SafeAreaView style={{ ...Styles.container, paddingVertical: HP(1) }}>
            <ScrollView contentContainerStyle={{ paddingBottom: HP(20) }}>
                <CustomHead1 onPressArrow={() => props.navigation.goBack()} txt={"Add Your Case"} />
                <View style={{ flex: 1, paddingHorizontal: WP(6), marginTop: HP(5) }}>
                    <Text style={{ ...Styles.nameTxt, }}>Name</Text>
                    <View style={{ marginTop: HP(2) }}>
                        <Input onChange={(e) => setName(e)} placeTxt={"Name"} />
                    </View>
                    {/* <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>CNIC</Text>
                    <View style={{ marginTop: HP(2) }}>
                        <Input onChange={(e) => setCnic(e)} placeTxt={"Enter CNIC (*****-*******-*)"} keyboardType={"number-pad"} />
                    </View> */}
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Phone Number</Text>
                    <View style={{ marginTop: HP(2) }}>
                        <Input onChange={(e) => setPhone(e)} placeTxt={"Phone Number"} keyboardType={"number-pad"} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Need<Text style={{ color: 'red' }}>*</Text></Text>
                    <TouchableOpacity onPress={() => setNeedMod(true)} style={{ marginTop: HP(2), justifyContent: 'center', width: '100%' }}>
                        <Input editable value={need} placeTxt={need} />
                        <SVGS.downArrow style={{ position: 'absolute', right: WP(10), }} />
                    </TouchableOpacity>

                    {need == 'Education' &&
                        <View>
                            <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Institute</Text>
                            <View style={{ marginTop: HP(2) }}>
                                <Input onChange={(e) => setInstitute(e)} placeTxt={"Enter Institue Name"} />
                            </View>
                        </View>
                    }
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
                        <View>
                            <View style={{ marginTop: HP(2) }}>
                                <Input keyboardType={"number-pad"} onChange={(e) => setMoney(e)} placeTxt={"Enter Amount"} />
                            </View>
                            <View style={{ marginTop: HP(2) }}>
                                <Input onChange={(e) => setAccountName(e)} placeTxt={"Account Name"} />
                            </View>
                            <View style={{ marginTop: HP(2) }}>
                                <Input keyboardType={"number-pad"} onChange={(e) => setAccount(e)} placeTxt={"Enter Account Number"} />
                            </View>
                        </View>
                    }
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Location<Text style={{ color: 'red' }}>*</Text></Text>
                    {need == 'Blood' &&
                        <TouchableOpacity onPress={() => openLocation()} style={{ marginTop: HP(2), justifyContent: 'center' }}>
                            <TextInput editable={false} placeholderTextColor={"#B7C1DF"} placeholder={"Click to give your current location"} style={{ ...Styles.inp, backgroundColor: location ? "#91ADFE" : "#fff" }} />
                            {location &&
                                <Icon name='done-all' color={"#fff"} size={25} style={{ position: 'absolute', right: WP(10), }} />
                            }
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={() => setlocMod(true)} style={{ marginTop: HP(2), justifyContent: 'center' }}>
                        <Input editable value={loc} placeTxt={loc ? loc : "Select District"} />
                        <SVGS.downArrow style={{ position: 'absolute', right: WP(10), }} />
                    </TouchableOpacity>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Case Description</Text>
                    <View style={{ marginTop: HP(2) }}>
                        <TextInput numberOfLines={7} textAlignVertical={"top"} multiline={true} placeholderTextColor={"#B7C1DF"} onChangeText={(e) => setDesc(e)} style={{ ...Styles.inp, color: 'black' }} placeholder={'Description'} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Volunteer Reference</Text>
                    <TouchableOpacity onPress={() => setVolMod(true)} style={{ marginTop: HP(2), justifyContent: 'center' }}>
                        <Input editable value={volt?.name} placeTxt={"Select Volunteer"} />
                        <SVGS.downArrow style={{ position: 'absolute', right: WP(10), }} />
                    </TouchableOpacity>
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
            <NeedModal mod={needMod} onPress={() => setNeedMod(false)} need={need} onPressBlood={() => setNeed('Blood')} onPressMoney={() => setNeed('Money')} onPressEdu={() => setNeed('Education')} onPressOther={() => setNeed('Other')} />
            <CityModal mod={locMod} setLocation={setLoc} Location={loc} onPress={() => setlocMod(false)} setMod={setlocMod} />
            <DonorList mod={donMod} donors={donors} exist={exist} onPress={() => setDonMod(false)} />
            <VoltModal mod={volMod} onPress={()=>setVolMod(false)} setMod={setVolMod} setVolt={setVolt} voltA={props.volunteer}/>
        </SafeAreaView>
    )
}
const mapStateToProps = (state: any) => {
    const { backgroundColor } = state;
    const { user } = state;
    const { volunteer } = state;
    // alert(backgroundColor);
    // alert(Imgs);
    // console.log(backgroundColor);
    console.log('Redux User=>', user);
    console.log('Redux Volun=>', volunteer);

    return state;
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeBackgroundColor: (bg: any) => dispatch(ChangeBackgroundColor(bg)),
        getUser: (userInfo: any) => dispatch(GetUser(userInfo)),
        getVolun: (voluntir: any) => dispatch(GetVolun(voluntir)),
    }
}
// export default Home
export default connect(mapStateToProps, mapDispatchToProps)(Add);