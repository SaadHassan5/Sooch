import React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import ReactNativeModal from 'react-native-modal';
import { HP, WP } from '../../config';
import fontFamily from '../../config/fontFamily';
import { IMAGES, SVGS } from '../../imgs';
import { CustomBtn1 } from '../CustomButton/CustomBtn1';
import { CameraComp } from '../SvgComponent/cameraComp';

const Styles = StyleSheet.create({
    modSelect: {
        fontFamily: fontFamily.regular,
        textAlign: "center",
        color: '#3C3C43',
        fontSize: 13,
        lineHeight: 18,
        paddingVertical: HP(2),
        borderBottomWidth: .5,
        borderColor: "#3C3C43"
    },
    photoView: {
        width: WP(15),
        height: WP(15),
        borderRadius: WP(2),
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export class SelectPhotoModal extends React.Component {
    render() {
        return (
            <ReactNativeModal isVisible={this.props.mod} onBackButtonPress={this.props.onPress} onBackdropPress={this.props.onPress} style={{ margin: 0 }}>
                <View style={{ width: WP(92), alignSelf: 'center', height: this.props.photo ? HP(35) : HP(30), backgroundColor: 'transparent', bottom: HP(2), position: 'absolute', }}>
                    <View style={{ width: "100%", backgroundColor: '#DCDCDF', borderRadius: WP(3) }}>
                        <Text style={{ ...Styles.modSelect, borderBottomWidth: this.props.photo ? 0 : .5 }}>Select photo</Text>
                        {this.props.photo &&
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: WP(6) }}>
                                <TouchableOpacity style={{ backgroundColor: 'black', ...Styles.photoView }}>
                                    <CameraComp col={'white'} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={IMAGES.dp} style={{ ...Styles.photoView, marginLeft: WP(5) }} />
                                </TouchableOpacity>
                            </View>
                        }
                        <TouchableOpacity onPress={this.props.onPressOpen}>
                            <Text style={{ ...Styles.modSelect, fontSize: 20, color: '#007AFF', }}>Open gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onPressTake}>
                            <Text style={{ ...Styles.modSelect, fontSize: 20, color: '#E72C37' }}>Take a photo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'black', marginTop: HP(3), borderRadius: WP(3) }}>
                        <TouchableOpacity onPress={this.props.onPress} style={{ backgroundColor: 'white', borderRadius: WP(3) }}>
                            <Text style={{ ...Styles.modSelect, fontSize: 20, color: '#0118B5', paddingVertical: HP(2.2) }}>Delete photo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ReactNativeModal>
        );
    }
}
