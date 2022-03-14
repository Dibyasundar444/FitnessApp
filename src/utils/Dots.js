import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Dots(
    {
        backgroundColor,
        width,
        height,
        borderRadius,
        marginVertical,
        marginHorizontal
    }
    ){
  return (
    <View 
        style={{
            backgroundColor:backgroundColor, 
            width: width, 
            height: height,
            borderRadius: borderRadius, 
            marginHorizontal: marginHorizontal, 
            marginVertical: marginVertical, 
        }} 
    />
  );
}
