import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import St_Line from './St_Line';

export default function BoxHeader({title,rightTxt,nav,isRight}) {
  return (
    <View
        style={{
            flexDirection:"row",
            justifyContent:"space-between"
        }}
    >
        <Text style={{letterSpacing:1,fontWeight:'600',color:"#FFF"}}>{title}</Text>
        {
            isRight &&
            <View>
                <Text 
                onPress={nav}
                style={{letterSpacing:1,fontWeight:'500',color:"#FFF",fontSize:12}}>{rightTxt}</Text>
                <St_Line 
                    WIDTH="100%"
                    BORDER_WIDTH={0.2}
                    BORDER_COLOR="#fff"
                    BACK_COLOR="#fff"
                />
            </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({})