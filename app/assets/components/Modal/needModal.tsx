import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { HP, WP } from '../../config';
import fontFamily from '../../config/fontFamily';
import { CustomBtn1 } from '../CustomButton/CustomBtn1';

const Styles = StyleSheet.create({
    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: HP(.8),
        borderRadius: WP(3),
    },
    txt: {
        fontSize: 23,
        fontFamily: fontFamily.regular,
        lineHeight: 27,
    },
    genTxt: {
        fontFamily: fontFamily.semi_bold,
        fontSize: 17,
        color: 'black',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadow: {
      shadowColor: '#979797',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5, elevation: 1,
    },
})
export class NeedModal extends React.Component {
    state = {
    }
    render() {
        return (
            <ReactNativeModal isVisible={this.props.mod} onBackdropPress={this.props.onPress} onBackButtonPress={this.props.onPress} style={{  }}>
              
                <View style={{ width: '80%', alignSelf: 'center', height: HP(37), backgroundColor: 'white' }}>
                    <View style={{ paddingHorizontal: WP(6) }}>
                        <Text style={{ ...Styles.genTxt, marginTop: HP(1), paddingLeft: WP(2) }}>Choose Your Need</Text>
                        <TouchableOpacity onPress={this.props.onPressBlood} style={{ ...Styles.row, marginTop: HP(2) }}>
                            <RadioButton
                                status={this.props.need == 'Blood' ? 'checked' : 'unchecked'}
                                color={'#673AB7'}
                                onPress={this.props.onPressBlood}
                            />
                            <Text style={{ ...Styles.txt, color: 'black', fontSize: 16, paddingLeft: WP(3) }}>Blood</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onPressMoney} style={{ ...Styles.row, marginTop: HP(1.5) }}>
                            <RadioButton
                                status={this.props.need == 'Money' ? 'checked' : 'unchecked'}
                                color={'#673AB7'}
                                onPress={this.props.onPressMoney}
                            />
                            <Text style={{ ...Styles.txt, color: 'black', fontSize: 16, paddingLeft: WP(3) }}>Money</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onPressEdu} style={{ ...Styles.row, marginTop: HP(1.5) }}>
                            <RadioButton
                                status={this.props.need == 'Education' ? 'checked' : 'unchecked'}
                                color={'#673AB7'}
                                onPress={this.props.onPressEdu}
                            />
                            <Text style={{ ...Styles.txt, color: 'black', fontSize: 16, paddingLeft: WP(3) }}>Education</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onPressOther} style={{ ...Styles.row, marginTop: HP(1.5) }}>
                            <RadioButton
                                status={this.props.need == 'Medical' ? 'checked' : 'unchecked'}
                                color={'#673AB7'}
                                onPress={this.props.onPressOther}
                            />
                            <Text style={{ ...Styles.txt, color: 'black', fontSize: 16, paddingLeft: WP(3) }}>Medical</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{...Styles.shadow,borderTopWidth:1,borderColor:'transparent' }}>
                        <View style={{ ...Styles.row,position:'absolute',right:WP(3)}}>
                            <TouchableOpacity onPress={this.props.onPress} style={{padding:WP(3)}}>
                                <Text style={{...Styles.txt, color: '#673AB7', fontSize: 16,}}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ReactNativeModal>
        );
    }
}
