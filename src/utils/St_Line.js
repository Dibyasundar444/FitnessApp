import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function St_Line({HEIGHT,WIDTH,BORDER_WIDTH,HOR_MARGIN,VER_MARGIN,BORDER_COLOR,BACK_COLOR}) {
  return (
    <View 
        style={{
            height: HEIGHT,
            width: WIDTH,
            borderWidth: BORDER_WIDTH,
            marginHorizontal: HOR_MARGIN,
            marginVertical: VER_MARGIN,
            borderColor: BORDER_COLOR,
            backgroundColor: BACK_COLOR
        }} 
    />
  );
}

const styles = StyleSheet.create({})