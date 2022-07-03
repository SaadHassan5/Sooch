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
                <VideoPlayer
                    style={{ height: HP(30), width: '90%', marginTop: HP(3), alignSelf: 'center' }}
                    video={require("../../assets/videos/poor.mp4")}
                />
                <Text style={{ ...Styles.feedTxt, paddingHorizontal: WP(8), paddingTop: HP(2) }}>
                Poverty is at disastrous in many countries striking millions of people around the globe. Many poor and needy people struggle to attain basic necessities of life for themselves and their families in order to improve their way of living. These poor people cannot improve their standard of life at their own we have to help them for making their life comfortable. We cannot make such needy and poor people lavish but can at least help them to achieve the basic essentials of life so that they can lead a prosperous life.
                </Text>
                <VideoPlayer
                    style={{ height: HP(30), width: '90%', marginTop: HP(3), alignSelf: 'center' }}
                    video={require("../../assets/videos/humanity.mp4")}
                />
                <Text style={{ ...Styles.feedTxt, paddingHorizontal: WP(8), paddingTop: HP(2) }}>
                There are people in this world who live a luxurious life enjoying the joy of fundamentals. These people have what they want and desire to live a comfortable life. On the other hand, there are people who do not have enough clothes to wear, food to eat, education, healthcare, shelter to live and other basic necessities of life. The poor and needy people cannot even afford the basic requirements of living and are fighting each day for life.
                </Text>
                <VideoPlayer
                    style={{ height: HP(30), width: '90%', marginTop: HP(3), alignSelf: 'center' }}
                    video={require("../../assets/videos/helping.mp4")}
                />
                <Text style={{ ...Styles.feedTxt, paddingHorizontal: WP(8), paddingTop: HP(2) }}>
                A lot of people think to make a donation and they do it. Many think what will I get in return if I help others. You might also wonder what the benefits of helping the poor are. Well, it is all about helping someone in living a better life and achieving his/her dreams. You can be like a god for somebody by offering a very little fraction of your wealth.

You can play a very important role in someone’s life if you help that person in getting better education. This world needs more and more good people who can do good deeds to support others in improving their lifestyle. You do not need to spend millions of dollars; a few hundred bucks can also work to bring smile on many kids’ faces.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Counselling;