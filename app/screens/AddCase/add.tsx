import React from 'react'
import { ActivityIndicator, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { CustomBtn1 } from '../../assets/components/CustomButton/CustomBtn1';
import { CustomHead1 } from '../../assets/components/CustomHeader/CustomHead1';
import { Input } from '../../assets/components/Input/Input';
import { HP, WP } from '../../assets/config';
import { AddStyles as Styles } from './add-style';

const Add = (props) => {
    return (
        <SafeAreaView style={{ ...Styles.container, paddingVertical: HP(1) }}>
            <CustomHead1 onPressArrow={() => props.navigation.goBack()} txt={"Add Your Case"} />
            <View style={{ flex: 1, paddingHorizontal: WP(6), marginTop: HP(5) }}>
                <Text style={{ ...Styles.nameTxt, }}>Name</Text>
                <View style={{marginTop:HP(2)}}>
                    <Input placeTxt={"Name"} />
                </View>

                <Text style={{ ...Styles.nameTxt,marginTop:HP(3) }}>Phone Number</Text>
                <View style={{marginTop:HP(2)}}>
                    <Input placeTxt={"Phone Number"} />
                </View>

                <Text style={{ ...Styles.nameTxt,marginTop:HP(3) }}>Case Description</Text>
                <View style={{marginTop:HP(2)}}>
                    <TextInput multiline={true} style={{...Styles.inp,height:HP(30)}} placeholder={'Description'}/>
                </View>

                <View style={{marginTop:HP(5)}}>
                    <CustomBtn1 txt={"Post"}/>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Add;