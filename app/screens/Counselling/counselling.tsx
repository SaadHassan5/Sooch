import React, { useRef } from 'react'
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import { HomeHeader } from '../../assets/components/CustomHeader/HomeHeader';
import { HP, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';
import { IMAGES, SVGS } from '../../assets/imgs';
import { CounStyles as Styles } from './coun-style';
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
const Counselling = (props) => {
    const ref = useRef();
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <ScrollView contentContainerStyle={{paddingBottom:HP(10)}}>
                <CustomHead1 txt={"Counselling"} onPressArrow={() => props.navigation.goBack()} />
                <VideoPlayer
                    style={{ height: HP(30), width: '90%', marginTop: HP(3), alignSelf: 'center' }}
                    video={require("../../assets/videos/bloodVideo.mp4")}
                />
                <Text style={{ ...Styles.feedTxt, paddingHorizontal: WP(8), paddingTop: HP(2) }}>One donation of blood can save up to three lives. As the need for blood continues to grow around the world, WHO and partners recognize all those who volunteer to give blood, and invite more people to be heroes by donating blood voluntarily and regularly.</Text>
                <VideoPlayer
                    style={{ height: HP(30), width: '90%', marginTop: HP(3), alignSelf: 'center' }}
                    video={require("../../assets/videos/charity.mp4")}
                />
                <Text style={{ ...Styles.feedTxt, paddingHorizontal: WP(8), paddingTop: HP(2) }}>
                    When Heber J. Grant was young, his parents were too poor to replace his old, thin jacket. Instead, his mother surprised him with a winter coat she had made by hand. Heber loved it.

                    One day, as he was playing in the snowy street, he noticed a small boy crouched in front of an exhaust grate, trying to get warm. Heber gave his new coat to the boy, who needed it more than he did.

                    This Christmas and always, take time to notice the people around you. What can you do to help them? Your service will warm your heart and theirs.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Counselling;