import React from 'react'
import { ActivityIndicator, ImageBackground, Platform, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { HP, palette, WP } from '../../assets/config';
import { IMAGES, SVGS } from '../../assets/imgs';
import { LoginPhnStyles as Styles } from './loginPhn-style';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { LoginIcons } from '../../assets/components/LoginIcons/LoginIcons';
import { FireAuth } from '../../Auth/socialAuth';
import auth from '@react-native-firebase/auth';
import fontFamily from '../../assets/config/fontFamily';
import { OtpInput } from '../../assets/components/Otp_Input/Otp_Input';
class LoginPhn extends React.Component {
  state = {
    eye: true,
    email: '',
    password: '',
    signed: true,
    active: false,
    confirm: null,
    code: "123",
    userCode:"",
  }
  componentDidMount() {

  }
  async checkLogin() {
    if (this.state.email.trim() != '') {
      let reg = /^923\d{9}$/;
      // let reg =/^03\d{9}$/;
      console.log(this.state.email.length);
      if (reg.test(this.state.email.trim())) {
        this.props.navigation.navigate("OtpConfirmation",{number:"+"+this.state.email})
        this.toastPrompt('Sending Code')
      }
      else {
        this.toastPrompt('Invalid Phone Number')
      }
    }
    else {
      this.toastPrompt('Enter Phone Number')
    }
  }
  toastPrompt(msg) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      // alert(msg);
    }
  }

  render() {
    return (
      <View style={{ ...Styles.container }}>
        <ImageBackground source={IMAGES.splashBack} style={{ width: '100%', height: '100%' }}>
          <CustomHead1 txt={'Log In'} />
          <View style={{ ...Styles.whiteView, paddingTop: HP(1.5), paddingHorizontal: WP(6) }}>
            <Text style={{ ...Styles.logTxt }}>Log In</Text>
            <View style={{ justifyContent: 'center', width: '100%', marginTop: HP(3), }}>
              <Input keyboardType='phone-pad' onChange={(e) => { this.setState({ email: e }) }} placeTxt={"Phone number"} />
              <SVGS.userIcon style={{ position: 'absolute', right: WP(5) }} />
            </View>
            <Text style={{ ...Styles.forgotTxt, textAlign: 'right', color: palette.lightGrey }}>Format ( 923********* )</Text>
            {/* {this.state.code.length>0 &&
              <View>
                <OtpInput value={this.state.userCode}/>
              </View>
            } */}
            <View style={{ paddingTop: HP(3) }}>
              <CustomBtn1 txt={'Sign In'} onPress={() => this.checkLogin()} />
              {/* this.props.navigation.navigate('Signup') */}
            </View>
            {/* <Text style={{ ...Styles.orTxt }}>or login with</Text> */}
            {/* <LoginIcons  /> */}
            {/* <TouchableOpacity style={{ marginTop: HP(4), paddingVertical: HP(2) }} onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={{ ...Styles.dontTxt }}>Don’t have an account? <Text style={{ color: '#0118B5' }}>Sign Up</Text></Text>
            </TouchableOpacity> */}
          </View>

        </ImageBackground>
        {this.state.active &&
          <View style={{ width: '100%', height: "100%", backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', }}>
            <ActivityIndicator size={"large"} color="#00ff00" />
          </View>
        }
      </View>
    );
  }
}
export default LoginPhn;