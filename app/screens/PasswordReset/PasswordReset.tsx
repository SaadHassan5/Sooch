import React from 'react'
import { ActivityIndicator, ImageBackground, Platform, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { HP, WP } from '../../assets/config';
import { IMAGES, SVGS } from '../../assets/imgs';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { ResetStyles as Styles } from './reset-style';
import { SendModal } from '../../assets/components/Modal/sendModal';


export class PasswordReset extends React.Component {
    state = {
        mod: false, sent: false, eye: true,
        eye1: true,
        email: '',
        active: false,
        password: '',
        otp: '',
    }
    async forgotPas() {
        // const sen = await Api.forgotPassword(this.state.email, this.props);
        // console.log('SSS', sen);

        this.setState({
            sent: true
        })
    }
    async ResetPas() {
        if (this.state.password.trim()!='' ) {
            
        }
        else{
            this.toastPrompt('Invalid Password')
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
                    <CustomHead1 txt={'Password Reset'} onPressArrow={() => this.props.navigation.goBack()} />
                    <View style={{ ...Styles.whiteView, paddingTop: HP(1.5), paddingHorizontal: WP(6) }}>
                        <Text style={{ ...Styles.pasTxt }}>Password Reset</Text>
                        {this.state.sent ?
                            <View style={{}}>
                                <View style={{ justifyContent: 'center', width: '100%', marginTop: HP(3), }}>
                                    <Input onChange={(e) => this.setState({ password: e })} eye={this.state.eye} password placeTxt={"New Password"} />
                                    <TouchableOpacity onPress={() => { this.setState({ eye: !this.state.eye }) }} style={{ position: 'absolute', right: WP(5) }} >
                                        {this.state.eye ?
                                            <Icon name='eye' size={25} color={'#B7C1DF'} />
                                            :
                                            <Icon name='eye-off' size={25} color={'#B7C1DF'} />
                                        }
                                    </TouchableOpacity>
                                </View>
                                <View style={{ justifyContent: 'center', width: '100%', marginTop: HP(3), }}>
                                    <Input onChange={(e) => this.setState({ otp: e })}  placeTxt={"O T P"} />
                                    <TouchableOpacity onPress={() => { this.setState({ eye1: !this.state.eye1 }) }} style={{ position: 'absolute', right: WP(5) }} >
                                        {/* {this.state.eye1 ?
                                            <Icon name='eye' size={25} color={'#B7C1DF'} />
                                            :
                                            <Icon name='eye-off' size={25} color={'#B7C1DF'} />
                                        } */}
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingTop: HP(3) }}>
                                    <CustomBtn1 txt={'Confirm'} onPress={() => { this.ResetPas();  }} />
                                </View>
                            </View>
                            :
                            <View>
                                <Text style={{ ...Styles.enterTxt, paddingTop: HP(2) }}>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</Text>
                                <View style={{ justifyContent: 'center', width: '100%', marginTop: HP(3), }}>
                                    <Input onChange={(e) => this.setState({ email: e })} placeTxt={"E-mail"} />
                                    <SVGS.email style={{ position: 'absolute', right: WP(5) }} />
                                </View>
                                <View style={{ paddingTop: HP(3) }}>
                                    <CustomBtn1 txt={'Send'} onPress={() => { this.forgotPas(); this.setState({ active: true }) }} />
                                </View>
                            </View>
                        }
                        {/* {this.state.active &&
                            <View style={{ width: '100%', height: "100%", backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', }}>
                                <ActivityIndicator size={"large"} color="#00ff00" />
                            </View>
                        } */}
                    </View>
                </ImageBackground>
                <SendModal txt={'Password Reset'} txt1={'The email was successfully sent'} mod={this.state.mod} onPressSent={() => { this.setState({ sent: true, mod: false }); }} onPress={() => this.setState({ mod: false })} />
            </View>
        );
    }
}
