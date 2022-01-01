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
export class GenderModal extends React.Component {
    state = {
        gender: this.props.gender,
    }
    render() {
        return (
            <ReactNativeModal isVisible={this.props.mod} onBackdropPress={this.props.onPress} onBackButtonPress={this.props.onPress} style={{  }}>
                {/* <View style={{ width: '80%',alignSelf:'center', height: HP(30), backgroundColor: 'white'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", paddingVertical: HP(1) }}>
                        <Text style={{ ...Styles.genTxt }}>Gender</Text>
                        <TouchableOpacity onPress={this.props.onPress} style={{ position: 'absolute', left: WP(5), }}>
                            <Text style={{ ...Styles.genTxt, fontFamily: fontFamily.regular }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingHorizontal:WP(5)}}>
                        <TouchableOpacity  onPress={this.props.onPressFemale}  style={{ ...Styles.touch,backgroundColor:this.props.gender=='Female'?'#F5F8FE':'white' }}>
                            <Text style={{ ...Styles.txt,color:this.props.gender=='Female'?'black':'gray' }}>Female</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onPressMale} style={{ ...Styles.touch,backgroundColor:this.props.gender=='Male'?'#F5F8FE':'white' }}>
                            <Text style={{ ...Styles.txt ,color:this.props.gender=='Male'?'black':'gray'}}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onPressOther} style={{ ...Styles.touch,backgroundColor:this.props.gender=='Other'?'#F5F8FE':'white' }}>
                            <Text style={{ ...Styles.txt,color:this.props.gender=='Other'?'black':'gray'}}>Other</Text>
                        </TouchableOpacity>
                        <View style={{marginTop:HP(1)}}>
                            <CustomBtn1 onPress={this.props.onPress} txt={"Confirm"}/>
                        </View>
                    </View>
                </View> */}
                <View style={{ width: '80%', alignSelf: 'center', height: HP(32), backgroundColor: 'white' }}>
                    <View style={{ paddingHorizontal: WP(6) }}>
                        <Text style={{ ...Styles.genTxt, marginTop: HP(1), paddingLeft: WP(2) }}>Choose Your Gender</Text>
                        <TouchableOpacity onPress={this.props.onPressFemale} style={{ ...Styles.row, marginTop: HP(2) }}>
                            <RadioButton
                                status={this.props.gender == 'Female' ? 'checked' : 'unchecked'}
                                color={'#673AB7'}
                            />
                            <Text style={{ ...Styles.txt, color: 'black', fontSize: 16, paddingLeft: WP(3) }}>Female</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onPressMale} style={{ ...Styles.row, marginTop: HP(1.5) }}>
                            <RadioButton
                                status={this.props.gender == 'Male' ? 'checked' : 'unchecked'}
                                color={'#673AB7'}
                            />
                            <Text style={{ ...Styles.txt, color: 'black', fontSize: 16, paddingLeft: WP(3) }}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onPressOther} style={{ ...Styles.row, marginTop: HP(1.5) }}>
                            <RadioButton
                                status={this.props.gender == 'Other' ? 'checked' : 'unchecked'}
                                color={'#673AB7'}
                            />
                            <Text style={{ ...Styles.txt, color: 'black', fontSize: 16, paddingLeft: WP(3) }}>Other</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{...Styles.shadow,borderTopWidth:1,borderColor:'transparent' }}>
                        <View style={{ ...Styles.row,position:'absolute',right:WP(3)}}>
                            <TouchableOpacity onPress={this.props.onPress} style={{padding:WP(3)}}>
                                <Text style={{...Styles.txt, color: '#673AB7', fontSize: 16,}}>CANCEL</Text>
                            </TouchableOpacity>
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
