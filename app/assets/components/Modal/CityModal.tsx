import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, ScrollView, Platform, Pressable, FlatList } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { HP, palette, WP } from '../../config';
import { cities } from '../../config/cities';
import fontFamily from '../../config/fontFamily';
import { Input } from '../Input/Input';

export const CityModal = ({ mod, setLocation, Location, onPress,setMod }) => {
    const [city, setCity] = useState(cities)
    useEffect(()=>{

    },[city])
    const search = (searchText) => {
        // this.setState({searchText: searchText});
      
        let filteredData = cities.filter(function (item) {
          return item.name.toLowerCase().includes(searchText.toLowerCase());
        });
      
        // this.setState({filteredData: filteredData});
        setCity(filteredData)
      };
    return (
        <ReactNativeModal isVisible={mod} onBackButtonPress={onPress} onBackdropPress={onPress}>
            <View style={{ width: "90%", height: HP(60), backgroundColor: 'white', alignSelf: 'center', borderRadius: WP(4), paddingHorizontal: WP(5), paddingTop: HP(2) }}>
                <TextInput onChangeText={(e) => search(e)} placeholder={"Search City"} style={{ borderWidth: .5, height: HP(6),borderRadius:WP(3),paddingHorizontal:WP(5),borderColor:palette.maalta,fontFamily:fontFamily.light,paddingBottom:HP(2),color:'black'}} />
                <FlatList
                    // padding={30}
                    numColumns={1}
                    data={city}
                    contentContainerStyle={{ paddingBottom: HP(10),paddingLeft:WP(0),}}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={()=>{setLocation(item.name);setMod(false)}} style={{ paddingVertical: HP(.5), marginTop: HP(.5) }}>
                            <Text style={{ fontFamily: fontFamily.semi_bold, color: 'black', fontSize: 20 }}>{item.name}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        </ReactNativeModal>
    )
}