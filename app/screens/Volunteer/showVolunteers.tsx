import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import { HomeHeader } from '../../assets/components/CustomHeader/HomeHeader';
import { HP, palette, WP } from '../../assets/config';
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
const ShowVolunteers = (props) => {
    const [name, setName] = useState(props?.user?.Name)
    const [desig, setDesig] = useState('')
    const [phone, setPhone] = useState(props?.user?.Phone)
    const [gender, setGender] = useState(props?.user?.gender)
    const [vol, setVol] = useState([])
    useEffect(() => {
        getVolunteers()

    }, [])
    const getVolunteers = async () => {
        let temp = [];
        const res: any = await getAllOfCollection("Volunteer");
        console.log('res homee', res);
        setVol(res);
        props.getVolun(res);
    }
    return (
        <SafeAreaView style={{ ...Styles.container }}>
            <CustomHead1 txt={"Volunteer"} onPressArrow={() => props.navigation.goBack()} />
            <View style={{ alignSelf: 'center' }}>
                <FlatList
                    numColumns={1}
                    data={vol}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View style={{ ...Styles.card, marginTop: HP(2), ...Styles.shadow }}>
                            <View style={{...Styles.row,justifyContent:'space-between'}}>
                                <Text style={{ ...Styles.nameTxt }}>{item?.name}</Text>
                                <Text style={{ ...Styles.nameTxt }}>{item?.phone}</Text>
                            </View>
                            <Text style={{ ...Styles.nameTxt }}>{item?.email}</Text>
                            <Text style={{ ...Styles.nameTxt,color:palette.status_dot_bg_green}}>Desigination: {item?.designation}</Text>
                            <Text style={{ ...Styles.nameTxt,color:palette.letterRed}}>Points: {item?.points}</Text>
                        </View>
                    }
                />
            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(ShowVolunteers);