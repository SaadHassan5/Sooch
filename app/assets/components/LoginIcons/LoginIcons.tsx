import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { WP, HP } from '../../config';
import fontFamily from '../../config/fontFamily';
import { SVGS } from '../../imgs';

const Styles = StyleSheet.create({

})
export class LoginIcons extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', }}>
                <TouchableOpacity onPress={this.props.onGooglePress} style={{padding:WP(3)}}>
                    <SVGS.google />
                </TouchableOpacity>
                <TouchableOpacity style={{padding:WP(3)}}>
                    <SVGS.fb />
                </TouchableOpacity>
                <TouchableOpacity  style={{padding:WP(3)}}>
                    <SVGS.apple />
                </TouchableOpacity>
            </View>
        );
    }
}
