import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Svg, { Path, Rect } from "react-native-svg";

export class UserTab extends React.Component {
    render() {
      return (
        <Svg width="20" height="24" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M9.5 0C6.96127 0 4.90323 2.03766 4.90323 4.55123C4.90323 7.06481 6.96127 9.10246 9.5 9.10246C12.0387 9.10246 14.0968 7.06481 14.0968 4.55123C14.0968 2.03766 12.0387 0 9.5 0Z" fill={this.props.col}/>
        <Path d="M4.59677 11.5298C2.05805 11.5298 0 13.5674 0 16.081V17.5232C0 18.4374 0.669148 19.2168 1.5804 19.3641C6.82541 20.212 12.1746 20.212 17.4196 19.3641C18.3309 19.2168 19 18.4374 19 17.5232V16.081C19 13.5674 16.942 11.5298 14.4032 11.5298H13.9854C13.7592 11.5298 13.5345 11.5652 13.3195 11.6347L12.2586 11.9777C10.4661 12.5572 8.53391 12.5572 6.74143 11.9777L5.68048 11.6347C5.46549 11.5652 5.24077 11.5298 5.01461 11.5298H4.59677Z" fill={this.props.col}/>
        </Svg>
        
    )
      }
}