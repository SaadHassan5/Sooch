import React, { useState } from 'react'
import { ActivityIndicator, ImageBackground, Platform, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { HP, WP } from '../../assets/config';
import { IMAGES, SVGS } from '../../assets/imgs';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { OtpStyles as Styles} from './Otp.styles';
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import { OtpInput } from '../../assets/components/Otp_Input/Otp_Input';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../../Auth/fire';

const OptConfirmation=(props)=> {
    const [active,setActive] = useState(true)
    const [value,setValue] = useState('')
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');

    useEffect(()=>{
        // setActive(true)
        console.log(props.route.params?.number);
        signInWithPhoneNumber();
        
    },[])
    const toastPrompt=(msg)=> {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            // alert(msg);
        }
    }
  
    // Handle the button press
    async function signInWithPhoneNumber() {
      await auth().signInWithPhoneNumber(props.route.params?.number).then((res:any)=>{
        console.log("Resseses",res);
        setConfirm(res);
      }).catch((err)=>{
    }).finally(()=>{
        setActive(false);
      });
    }
  
    async function confirmCode() {
      try {
        setActive(true);
        await confirm.confirm(value);
        console.log("Successful");
        await AsyncStorage.setItem("id",props.route.params?.number)
        await AsyncStorage.setItem("User",props.route.params?.number)
        let res: any = await getData("Users", props.route.params?.number, false);
        console.log("Users", props.route.params?.number,res);
        if(res){
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
        props.navigation.navigate("UserInfo",{number:props.route.params?.number})
      } catch (error) {
        console.log('Invalid code.');
      }
      setActive(false)
    }

        return (
            <View style={{ ...Styles.container }}>
                <ImageBackground source={IMAGES.splashBack} style={{ width: '100%', height: '100%' }}>
                    <CustomHead1 txt={'OTP Confirmation'} onPressArrow={() => this.props.navigation.goBack()} />
                    <View style={{ ...Styles.whiteView, paddingTop: HP(1.5), paddingHorizontal: WP(6) }}>
                        <Text style={{ ...Styles.pasTxt }}>Enter OTP</Text>
                        <View>
                            <OtpInput value={value} setValue={setValue}/>
                        </View>
                        <View>
                            <View style={{ paddingTop: HP(3) }}>
                                <CustomBtn1 txt={'Confirm'} onPress={() => {confirmCode() }} />
                            </View>
                        </View>
                    </View>
                        {active &&
                            <View style={{ width: '100%', height: "100%", backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', }}>
                                <ActivityIndicator size={"large"} color="red" />
                            </View>
                        }
                </ImageBackground>
            </View>
)}
export default OptConfirmation;