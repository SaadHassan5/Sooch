import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import CountryPicker from 'react-native-country-codes-picker/components/CountryPicker';


export class CountryPick extends React.Component {
  render() {
    return (
            <CountryPicker
                        show={this.props.show}
                        // when picker button press you will get the country object with dial code
                        pickerButtonOnPress={(item) => {
                            this.setState({dialCode:item.dial_code});
                            this.setState({flag:item.flag});
                            this.setState({show:false});
                            console.log(item);
                            
                        }}
                    />
    );
  }
}
