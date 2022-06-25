import React, { useRef, useState } from 'react'
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import { HomeHeader } from '../../assets/components/CustomHeader/HomeHeader';
import { HP, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';
import { IMAGES, SVGS } from '../../assets/imgs';
import { VolunteerStyles as Styles } from './volunteer-style';
import Icon from 'react-native-vector-icons/Feather'
import { ChatComp } from '../../assets/components/SvgComponent/chatComp';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChangeBackgroundColor, GetUser, GetVolun } from '../../root/action';
import { FireAuth } from '../../Auth/socialAuth';
import { getAllOfCollection, getData, saveData } from '../../Auth/fire';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import AlertService from '../../Services/alertService';
const Volunteer = (props) => {
    const [name, setName] = useState(props?.user?.Name)
    const [phone, setPhone] = useState(props?.user?.Phone)
    const [gender, setGender] = useState(props?.user?.gender)
    const [email, setEmail] = useState("")
    const onPost = async () => {
        if (name != '' && phone != '' && gender != '' && email != '') {
            let reg = /[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](gmail.com|hotmail.com|yahoo.com|outlook.com)/;
            if (reg.test(email)) {
                AlertService.confirm("Are you sure you want to be a volunteer?").then(async (res) => {
                    if (res) {

                        let obj = {
                            name: name,
                            phone: phone,
                            gender: gender,
                            email: email,
                            points:"0",
                        }
                        await saveData("Volunteer", email, obj);
                        AlertService.show("Congratulation","Welcome to our team!!");
                        getVolunteers();
                    }
                })
            }
            else {
                AlertService.show('Enter Valid Email Please!')
            }
        }
        else
            AlertService.show("Not Proceeded", "Required all fields!!")
    }
    const getVolunteers=async()=> {
        let temp = [];
        const res: any = await getAllOfCollection("Volunteer");
        console.log('res homee', res);
        props.getVolun(res);
        props.navigation.goBack()
    }
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <ScrollView contentContainerStyle={{ paddingBottom: HP(10) }}>
                <CustomHead1 txt={"Volunteer"} onPressArrow={() => props.navigation.goBack()} />
                <View style={{ paddingHorizontal: WP(7), marginTop: HP(3) }}>
                    <Text style={{ ...Styles.nameTxt, }}>Volunteer Name<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input onChange={(e) => setName(e)} value={name} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(2) }}>Volunteer Email<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input onChange={(e) => setEmail(e)} placeTxt={"Enter Email"} keyboardType={'email-address'} value={email} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(2) }}>Phone Number<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input onChange={(e) => setPhone(e)} placeTxt={"Enter Phone Number"} value={phone} />
                    </View>
                    <Text style={{ ...Styles.nameTxt, marginTop: HP(2) }}>Gender<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ marginTop: HP(1) }}>
                        <Input value={gender} editable />
                    </View>
                    <View style={{ marginTop: HP(5) }}>
                        <CustomBtn1 onPress={() => onPost()} txt={"Done"} />
                    </View>
                </View>
            </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(Volunteer);