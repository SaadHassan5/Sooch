import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { palette, WP } from '../../config';
import fontFamily from '../../config/fontFamily';

export interface Props { }
export interface State {
  count: 0,
}
const Styles = StyleSheet.create({
  inp: {
    fontFamily: fontFamily.regular,
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#B7C1DF',
    borderRadius: WP(4),
    paddingHorizontal: WP(6),
    color:palette.black,
    // width: '100%',
  }
})
export class Input extends React.Component<Props, State> {
  render() {
    return (
      <View>
        {this.props.password ?
          <TextInput onChangeText={this.props.onChange} secureTextEntry={this.props.eye} textContentType={'password'}  placeholder={this.props.placeTxt} placeholderTextColor={'#B7C1DF'} style={{ ...Styles.inp,backgroundColor:'white', }} />
          :
          <TextInput onChangeText={this.props.onChange} value={this.props.value} editable={this.props.editable?false:true} placeholder={this.props.placeTxt} placeholderTextColor={'#B7C1DF'} style={{ ...Styles.inp,backgroundColor: 'white', }} />
        }
      </View>
    );
  }
}