import React from 'react'
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import { HomeHeader } from '../../assets/components/CustomHeader/HomeHeader';
import { HP, WP } from '../../assets/config';
import fontFamily from '../../assets/config/fontFamily';
import { IMAGES, SVGS } from '../../assets/imgs';
import { HomeStyles as Styles } from './home-style';
import Icon from 'react-native-vector-icons/Feather'
import { ChatComp } from '../../assets/components/SvgComponent/chatComp';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChangeBackgroundColor, GetUser, GetVolun } from '../../root/action';
import { FireAuth } from '../../Auth/socialAuth';
import { getAllOfCollection, getData } from '../../Auth/fire';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CongoModal } from '../../assets/components/Modal/congoModal';

class Home extends React.Component<any> {
    state = {
        mode: 'feed',
        mod: false,
        volWeek: {}
    }
    componentDidMount() {
        this.callUser();
        this.getVolunteers();
    }
    async callUser() {

        const id = await AsyncStorage.getItem('id');
        console.log(id);

        let res: any = await getData("Users", id, false);
        console.log('res', res);
        this.props.getUser(res)
        // // console.log('all',res);

        // this.props.getUser(res?.data?.data?.user);

    }
    async getVolunteers() {
        console.log("Date",new Date().toDateString());
        
        let dayWk= new Date().toDateString().split(' ');
        if(true){
        let temp = [];
        const res: any = await getAllOfCollection("Volunteer");
        console.log('res homee', res);
        this.props.getVolun(res);
        let max = res[0]
        await res?.filter(function (item) {
            if (item?.points > max?.points) {
                max = item;
            }
        })
        const value = await AsyncStorage.getItem('VolunteerModal')
            if (value != "Exist") {
                console.log("Exist");
                this.setState({ mod: true })
            }
            else
            console.log("Not Exist");
        this.setState({ volWeek: max })
    }
    }
    render() {
        return (
            <SafeAreaView style={{ ...Styles.container, paddingVertical: HP(1), }}>
                {this.state.mod &&
                    <CongoModal mod={true} name={this.state.volWeek?.name} />
                }
                <ScrollView contentContainerStyle={{ paddingBottom: WP(40), marginTop: HP(1) }}>
                    <HomeHeader />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Volunteer')} style={{ ...Styles.cardView, ...Styles.shadow }}>
                        <Image resizeMode='contain' source={IMAGES.volunteer} style={{ ...Styles.img }} />
                        <View style={{ paddingLeft: WP(3) }}>
                            <Text style={{ ...Styles.nameTxt }}>Be a Volunteer<Text style={{ ...Styles.sharedTxt }}>  </Text></Text>
                            <Text style={{ ...Styles.sharedTxt }}>Lets get together</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Medical')} style={{ ...Styles.cardView, ...Styles.shadow }}>
                        <Image resizeMode='contain' source={IMAGES.medical} style={{ ...Styles.img }} />
                        <View style={{ paddingLeft: WP(3) }}>
                            <Text style={{ ...Styles.nameTxt }}>Medical<Text style={{ ...Styles.sharedTxt }}>  </Text></Text>
                            <Text style={{ ...Styles.sharedTxt }}>Need Medical Help?</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Blood')} style={{ ...Styles.cardView, ...Styles.shadow }}>
                        <Image source={IMAGES.bloodDonate} style={{ ...Styles.img }} />
                        <View style={{ paddingLeft: WP(3) }}>
                            <Text style={{ ...Styles.nameTxt }}>Donate Blood<Text style={{ ...Styles.sharedTxt }}>  </Text></Text>
                            <Text style={{ ...Styles.sharedTxt }}>For Humanity</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Money')} style={{ ...Styles.cardView, ...Styles.shadow }}>
                        <Image resizeMode='stretch' source={IMAGES.moneyDonate} style={{ ...Styles.img }} />
                        <View style={{ paddingLeft: WP(3) }}>
                            <Text style={{ ...Styles.nameTxt }}>Donate Money<Text style={{ ...Styles.sharedTxt }}>  </Text></Text>
                            <Text style={{ ...Styles.sharedTxt }}>Single penny will be appreciated</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('StudentHelp')} style={{ ...Styles.cardView, ...Styles.shadow }}>
                        <Image resizeMode='stretch' source={IMAGES.student} style={{ ...Styles.img }} />
                        <View style={{ paddingLeft: WP(3) }}>
                            <Text style={{ ...Styles.nameTxt }}>Students Help<Text style={{ ...Styles.sharedTxt }}>  </Text></Text>
                            <Text style={{ ...Styles.sharedTxt }}>Help our Future</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Counselling')} style={{ ...Styles.cardView, ...Styles.shadow }}>
                        <Image resizeMode='stretch' source={IMAGES.counselling} style={{ ...Styles.img }} />
                        <View style={{ paddingLeft: WP(3) }}>
                            <Text style={{ ...Styles.nameTxt }}>Counselling<Text style={{ ...Styles.sharedTxt }}>  </Text></Text>
                            <Text style={{ ...Styles.sharedTxt }}>Be a hero</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);