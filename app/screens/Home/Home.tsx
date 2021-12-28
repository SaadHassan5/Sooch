import React from 'react'
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import { HomeHeader } from '../../assets/components/CustomHeader/HomeHeader';
import { HP, WP } from '../../assets/config';
// import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
import { IMAGES, SVGS } from '../../assets/imgs';
import { HomeStyles as Styles } from './home-style';
import Icon from 'react-native-vector-icons/Feather'
import { ChatComp } from '../../assets/components/SvgComponent/chatComp';
// import Api from '../../services/api.service';
// import { ChangeBackgroundColor, GetUser } from '../../root/action';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChangeBackgroundColor, GetUser } from '../../root/action';
import { FireAuth } from '../../Auth/socialAuth';
import { getData } from '../../Auth/fire';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';
// import alertService from '../../services/alert.service';
// import { Auth } from '../../auth/socialAuth';

class Home extends React.Component<any> {
    state = {
        mode: 'feed',
    }
    componentDidMount() {
        this.callUser();
    }
    async callUser() {
        
      const id = await AsyncStorage.getItem('id');
      console.log(id);
      
        let res: any = await getData("Users",id,false);
        console.log('res',res);
        this.props.getUser(res)
        // // console.log('all',res);

        // this.props.getUser(res?.data?.data?.user);

    }
    render() {
        return (
            <SafeAreaView style={{ ...Styles.container, paddingVertical: HP(1),  }}>
                <HomeHeader />
                <ScrollView contentContainerStyle={{ paddingBottom: WP(40), marginTop: HP(6) }}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Blood')} style={{...Styles.cardView, ...Styles.shadow }}>
                        <Image source={IMAGES.bloodDonate} style={{ ...Styles.img }} />
                        <View style={{ paddingLeft: WP(3) }}>
                            <Text style={{ ...Styles.nameTxt }}>Donate Blood<Text style={{ ...Styles.sharedTxt }}>  </Text></Text>
                            <Text style={{ ...Styles.sharedTxt }}>For Humanity</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Money')} style={{...Styles.cardView, ...Styles.shadow }}>
                        <Image resizeMode='stretch' source={IMAGES.moneyDonate} style={{ ...Styles.img }} />
                        <View style={{ paddingLeft: WP(3) }}>
                            <Text style={{ ...Styles.nameTxt }}>Donate Money<Text style={{ ...Styles.sharedTxt }}>  </Text></Text>
                            <Text style={{ ...Styles.sharedTxt }}>Single penny will be appreciated</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView >
        );
    }
}
const mapStateToProps = (state: any) => {
    const { backgroundColor } = state;
    const { user } = state;
    // alert(backgroundColor);
    // alert(Imgs);
    // console.log(backgroundColor);
    console.log('Redux User=>', user);

    return state;
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeBackgroundColor: (bg: any) => dispatch(ChangeBackgroundColor(bg)),
        getUser: (userInfo: any) => dispatch(GetUser(userInfo)),
    }
}
// export default Home
export default  connect(mapStateToProps, mapDispatchToProps)(Home);