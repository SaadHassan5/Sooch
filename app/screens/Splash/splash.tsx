import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { HP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';
import { IMAGES, SVGS } from '../../assets/imgs';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Splash extends React.Component {
    state = {
        active: false,
    }
    componentDidMount() {
        setTimeout(() => {
            console.log('saad');
            this.checkExistedUser();
        }, 1000)
    }
    async checkExistedUser() {

        try {
            const value = await AsyncStorage.getItem('User')
            console.log('milaa', value);
            if (value !== null) {
                this.props.navigation.replace('TabNavigator')
            }
            else {
                    this.props.navigation.replace('Login')
                }
        } catch (e) {
            // error reading value
        }

    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={IMAGES.splashBack} style={{ width: '100%', height: '100%' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <SVGS.logo style={{ marginBottom: HP(3) }} />
                        <Text style={{ fontSize: 34, color: 'white', fontFamily: fontFamily.semi_bold }}>Welcome</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}