import React from 'react'
import { ActivityIndicator, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { HP, WP } from '../../assets/config';
import { ProfileStyles as Styles} from './profile-style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile=(props)=>{
    const Logout =()=>{
        AsyncStorage.removeItem("User");
        props.navigation.replace("Splash")
    }
    return(
        <SafeAreaView style={{...Styles.container,paddingVertical:HP(1)}}>
            <CustomHead1 onPressArrow={() => props.navigation.goBack()} txt={"Profile"} />
            <View style={{ flex: 1, paddingHorizontal: WP(6), marginTop: HP(15) }}>
                <Text style={{ ...Styles.nameTxt, }}>Name</Text>
                <View style={{marginTop:HP(2)}}>
                    <Input placeTxt={"Name"} />
                </View>

                <Text style={{ ...Styles.nameTxt,marginTop:HP(3) }}>Phone Number</Text>
                <View style={{marginTop:HP(2)}}>
                    <Input placeTxt={"Phone Number"} />
                </View>

                <View style={{marginTop:HP(10)}}>
                    <CustomBtn1 txt={"Update"}/>
                </View>
                <View style={{marginTop:HP(3)}}>
                    <CustomBtn1 onPress={()=>Logout()} txt={"Logout"}/>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Profile;