import React, { useRef, useState } from 'react'
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
import { getData } from '../../Auth/fire';
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

    const onPost = () => {

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
    const checkMoney = (mon) => {
        if (parseInt(mon) > 100000) {
            toastPrompt("Enter Money less than limit!!")
        }
        else {
            // toastPrompt("imit!!")
            setMoney(mon);
        }
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
            <ScrollView contentContainerStyle={{ paddingBottom: HP(10) }}>
                <CustomHead1 txt={"Medical Help"} onPressArrow={() => props.navigation.goBack()} />
                <View style={{ paddingHorizontal: WP(7), marginTop: HP(3) }}>
                    <Text style={{ ...Styles.nameTxt, }}>Patient Name<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input onChange={(e) => setName(e)} placeTxt={"Enter Patient Name"} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(2) }}>Hospital Address<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input onChange={(e) => setAdd(e)} placeTxt={"Enter Address"} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(2) }}>Amount<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input value={money} keyboardType={"number-pad"} onChange={(e) => {checkMoney(e)}} placeTxt={"Enter Required Amount"} />
                        <Text style={{ ...Styles.forgotTxt, textAlign: 'right', color: palette.lightGrey }}>Limit 100,000</Text>
                    </View> 
                    <Text style={{ ...Styles.nameTxt, }}>Patient Age<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input onChange={(e) => setName(e)} placeTxt={"Enter Patient Age"} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(2) }}>Phone Number<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input onChange={(e) => setName(e)} placeTxt={"Enter Phone Number"} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(2) }}>Disease Name</Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input onChange={(e) => setName(e)} placeTxt={"Enter Disease Name"} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(2) }}>Medical Help Description<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(2) }}>
                        <TextInput multiline={true} placeholderTextColor={"#B7C1DF"} onChangeText={(e) => setDesc(e)} style={{ ...Styles.inp, height: HP(30), color: 'black' }} placeholder={'Description'} />
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
                    <View style={{ marginTop: HP(5) }}>
                        <CustomBtn1 onPress={() => onPost()} txt={"Post"} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Medical;