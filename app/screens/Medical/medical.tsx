import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, ScrollView, Platform, Pressable, Linking, PermissionsAndroid } from 'react-native';
import { HomeHeader } from '../../assets/components/CustomHeader/HomeHeader';
import { HP, palette, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';
import { IMAGES, SVGS } from '../../assets/imgs';
import { MedicalStyles as Styles } from './medical-style';
import Icon from 'react-native-vector-icons/Feather'
import { ChatComp } from '../../assets/components/SvgComponent/chatComp';
import { connect } from 'react-redux';
import { ChangeBackgroundColor, GetUser } from '../../root/action';
import { FireAuth } from '../../Auth/socialAuth';
import { getData, getDataCase } from '../../Auth/fire';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import DocumentPicker from "react-native-document-picker";
import UploadIcon from "react-native-vector-icons/MaterialIcons"

const Medical = (props) => {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [add, setAdd] = useState("")
    const [money, setMoney] = useState("")
    const [doc, setDoc] = useState('');
    const [data, setData] = useState([])
    const [exist, setExist] = useState(false)
    useEffect(() => {
        getCase();
    }, [])
    const getCase = async () => {
        let exi = false;
        const id = await AsyncStorage.getItem("id");
        console.log("id", id);
        const res: any = await getDataCase("Cases")
        console.log(res);
       const ress= await res.filter(e => {
            if (e.Need == "Medical"){
                exi = true
                return e;
            }
        })
        console.log("Fil",ress);
        
        setExist(exi)
        setData(ress);
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
            {/* <ScrollView contentContainerStyle={{ paddingBottom: HP(10) }}> */}
            <CustomHead1 txt={"Money Needs"} onPressArrow={() => { props.navigation.goBack() }} />
            {!exist ?
                <Text style={{ ...Styles.feedTxt, alignSelf: 'center', marginTop: HP(40) }}>No Record Found</Text>
                :
                <ScrollView contentContainerStyle={{ paddingBottom: HP(10) }}>
                    {data?.map((item, i) =>
                        <View key={i}>
                                <View style={{ ...Styles.cardView, ...Styles.shadow, marginTop: HP(5),paddingVertical:HP(3) }}>
                                    <View style={{ ...Styles.row, justifyContent: 'space-between' }}>
                                        <Text style={{ ...Styles.feedTxt }}>{item.Name}</Text>
                                        <Text style={{ ...Styles.feedTxt }}>{item.Phone}</Text>
                                    </View>
                                    <Text style={{ ...Styles.nameTxt }}>Disease: <Text style={{ ...Styles.nameTxt, fontFamily: fontFamily.bold }}>{item?.diseaseName}</Text></Text>
                                    <View style={{ ...Styles.row, justifyContent: 'space-between' }}>
                                        <Text style={{ ...Styles.nameTxt }}>Money Required: <Text style={{ ...Styles.nameTxt, fontFamily: fontFamily.bold }}>{item?.medicalAmount}</Text></Text>
                                    </View>
                                        <Text style={{ ...Styles.nameTxt }}>Hospital Address: <Text style={{ ...Styles.nameTxt, fontFamily: fontFamily.bold }}>{item?.hospitalAddress}</Text></Text>
                                    <View style={{ ...Styles.row, }}>
                                        <SVGS.location width={WP(4)} height={WP(4)} style={{  }} />
                                        <Text style={{ ...Styles.nameTxt, fontFamily: fontFamily.bold, paddingLeft: WP(3) }}>{item?.district}</Text>
                                    </View>
                                    <Text style={{ ...Styles.nameTxt }}>{item?.Description}</Text>
                                </View>
                        </View>
                    )}
                </ScrollView>
                }
                    {/* </ScrollView> */}
        </SafeAreaView>
    )
}
export default Medical;