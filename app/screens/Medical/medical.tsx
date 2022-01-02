import React, { useRef, useState } from 'react'
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import { HomeHeader } from '../../assets/components/CustomHeader/HomeHeader';
import { HP, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';
import { IMAGES, SVGS } from '../../assets/imgs';
import { MedicalStyles as Styles } from './medical-style';
import Icon from 'react-native-vector-icons/Feather'
import { ChatComp } from '../../assets/components/SvgComponent/chatComp';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChangeBackgroundColor, GetUser } from '../../root/action';
import { FireAuth } from '../../Auth/socialAuth';
import { getData } from '../../Auth/fire';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
const Medical = (props) => {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const onPost = () => {

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
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(2) }}>Patient Age<Text style={{ color: 'red' }}>*</Text></Text>
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
                    <View style={{ marginTop: HP(5) }}>
                        <CustomBtn1 onPress={() => onPost()} txt={"Post"} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Medical;