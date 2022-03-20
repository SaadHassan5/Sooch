import React from 'react'
import { ActivityIndicator, ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { HP, WP } from '../../assets/config';
import { ProfileStyles as Styles } from './profile-style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChangeBackgroundColor, GetUser } from '../../root/action';
import { connect } from 'react-redux';
import { useState } from 'react';
import { getData, saveData } from '../../Auth/fire';
import { Checkbox } from 'react-native-paper';
import AlertService from '../../Services/alertService';

const Profile = (props) => {
    const [name, setName] = useState(props.user.Name)
    const [phone, setPhone] = useState(props.user.Phone)
    const [blood, setBlood] = useState(props.user.BloodGroup)
    const [mark, setMark] = useState(props.user.BloodDonar)
    const Logout = () => {
        AlertService.confirm("Are you sure yo want to Logout?","Yes").then(async (res) => {
            if (res) {
                AsyncStorage.removeItem("User");
                AsyncStorage.removeItem("id");
                props.navigation.replace("Splash")
            }
        })
    }
    const toastPrompt = (msg) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            // alert(msg);
        }
    }
    const onUpdate = async () => {
        AlertService.confirm("Are you sure yo want to UPDATE?","Yes" ).then(async (res) => {
            if (res) {
                const id = await AsyncStorage.getItem('id');
                await saveData("Users", id, {
                    Name: name,
                    Phone: phone,
                    BloodGroup: blood,
                    gender: props.user.gender,
                    Location: props.user.Location,
                    BloodDonar: mark
                })
                toastPrompt("Updated")
                callUser();
            }
        })
    }
    const callUser = async () => {

        const id = await AsyncStorage.getItem('id');
        console.log(id);

        let res: any = await getData("Users", id, false);
        console.log('res', res);
        props.getUser(res)
        // // console.log('all',res);

        // this.props.getUser(res?.data?.data?.user);

    }
    return (
        <SafeAreaView style={{ ...Styles.container, paddingVertical: HP(1) }}>
            <CustomHead1 onPressArrow={() => props.navigation.goBack()} txt={"Profile"} />
            <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, paddingHorizontal: WP(6), marginTop: HP(5) }}>
                <Text style={{ ...Styles.nameTxt, }}>Name</Text>
                <View style={{ marginTop: HP(2) }}>
                    <Input onChange={(e) => setName(e)} value={name} placeTxt={"Name"} />
                </View>

                <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Phone Number</Text>
                <View style={{ marginTop: HP(2) }}>
                    <Input value={phone} onChange={(e) => setPhone(e)} placeTxt={"Phone Number"} />
                </View>
                <Text style={{ ...Styles.nameTxt, marginTop: HP(3) }}>Blood Group</Text>
                <View style={{ marginTop: HP(2) }}>
                    <Input value={blood} onChange={(e) => setBlood(e)} placeTxt={"Blood Group"} />
                </View>
                <TouchableOpacity onPress={() => setMark(!mark)} style={{ ...Styles.row, marginTop: HP(2) }}>
                    <Checkbox
                        status={mark ? 'checked' : 'unchecked'}
                        uncheckedColor='red'
                        color='#B7C1DF'
                    />
                    <Text style={{ ...Styles.nameTxt }}>Mark yourself as available blood donar</Text>
                </TouchableOpacity>
                <View style={{ marginTop: HP(7) }}>
                    <CustomBtn1 onPress={() => onUpdate()} txt={"Update"} />
                </View>
                <View style={{ marginTop: HP(3) }}>
                    <CustomBtn1 onPress={() => Logout()} txt={"Logout"} />
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const mapStateToProps = (state: any) => {
    const { backgroundColor } = state;
    const { user } = state;
    // alert(backgroundColor);
    // alert(Imgs);
    // console.log(backgroundColor);
    console.log('Redux Profile User=>', user);

    return state;
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeBackgroundColor: (bg: any) => dispatch(ChangeBackgroundColor(bg)),
        getUser: (userInfo: any) => dispatch(GetUser(userInfo)),
    }
}
// export default Home
export default connect(mapStateToProps, mapDispatchToProps)(Profile);