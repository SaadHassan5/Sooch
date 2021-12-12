import React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import ReactNativeModal from 'react-native-modal';
import { HP, palette, WP } from '../../config';
import fontFamily from '../../config/fontFamily';
import { IMAGES, SVGS } from '../../imgs';
import { CustomBtn1 } from '../CustomButton/CustomBtn1';
import { CameraComp } from '../SvgComponent/cameraComp';

const Styles = StyleSheet.create({
    pasTxt:{
        fontSize:17,
        fontFamily:fontFamily.bold,
        color:palette.black,
        lineHeight:22,
        textAlign:'center',
    },
    emailTxt:{
        fontSize:13,
        fontFamily:fontFamily.regular,
        color:palette.black,
        lineHeight:16,
        textAlign:'center',
        paddingTop:HP(1),
    },
    touch:{
        flex:1,
        borderTopWidth:.5,
        marginTop:HP(2),
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'#3C3C43',
    },
    modView:{
        borderRadius:WP(3),width: WP(80), 
        alignSelf: 'center', height:  HP(17),
        paddingTop:HP(2), 
        backgroundColor: '#F2F2F2CC', 
        // bottom: HP(2), 
        // position: 'absolute',
    }
})
export class SendModal extends React.Component {
    render() {
        return (
            <ReactNativeModal isVisible={this.props.mod} onBackButtonPress={this.props.onPress} onBackdropPress={this.props.onPress} style={{ margin: 0 }}>
                <View style={{ ...Styles.modView }}>
                    <Text style={{...Styles.pasTxt}}>{this.props.txt}</Text>
                    <Text style={{...Styles.emailTxt}}>{this.props.txt1}</Text>
                    <TouchableOpacity onPress={this.props.onPressSent}  style={{...Styles.touch}}>
                        <Text style={{...Styles.pasTxt,fontFamily:fontFamily.semi_bold,color:'#007AFF'}}>OK</Text>
                    </TouchableOpacity>
                </View>
            </ReactNativeModal>
        );
    }
}
