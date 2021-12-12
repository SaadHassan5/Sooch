import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { HP, WP } from '../../config';
import fontFamily from '../../config/fontFamily';
import { CustomBtn1 } from '../CustomButton/CustomBtn1';

const Styles = StyleSheet.create({
    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:HP(.8),
        borderRadius:WP(3),
        
    },
    txt: {
        fontSize: 17,
        fontFamily: fontFamily.semi_bold,
        // lineHeight: 27,
        color: 'black',
        textAlign:'center',
    },
    genTxt: {
        fontFamily: fontFamily.semi_bold,
        fontSize: 14,
        color: 'black',
        textAlign:'center',
    }
})
export class EndModal extends React.Component {
    render() {
        return (
            <ReactNativeModal isVisible={this.props.mod} onBackdropPress={this.props.onPress} onBackButtonPress={this.props.onPress} style={{ margin: 0 }}>
                <View style={{ width: '80%',paddingHorizontal:WP(5), height: HP(30), backgroundColor: 'white',alignSelf:'center',borderRadius:WP(4),paddingTop:HP(3)}}>
                    <Text style={{...Styles.txt,textAlign:'center',paddingBottom:HP(1.5),borderBottomWidth:1,borderColor:'#878787'}}>Reason for ending emergency?</Text>
                    <TouchableOpacity onPress={this.props.onPressSelect} style={{paddingVertical:HP(1),marginTop:HP(1)}}>
                    <Text style={{...Styles.genTxt,}}>EMS has arrived</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPressSelect} style={{paddingVertical:HP(1)}}>
                    <Text style={{...Styles.genTxt,}}>I handle it by myself</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPressSelect} style={{paddingVertical:HP(1)}}>
                    <Text style={{...Styles.genTxt,}}>Another user hep me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPressSelect} style={{paddingVertical:HP(1)}}>
                    <Text style={{...Styles.genTxt,}}>Wrongly pressed</Text>
                    </TouchableOpacity>
                </View>
            </ReactNativeModal>
        );
    }
}
