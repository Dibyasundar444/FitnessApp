import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function SubmitBtn(
    {
        alignItems,
        width,
        backgroundColor,
        justifyContent,
        paddingVertical,
        marginTop,
        borderRadius,
        marginBottom,
        color,
        fontWeight,
        letterSpacing,
        fontSize,
        TEXT,
        CLICK
    }
    ) {
  return (
    <TouchableOpacity
        style={{
            alignItems: "center",
            width: width,
            justifyContent: "center",
            paddingVertical: paddingVertical,
            marginTop: marginTop,
            borderRadius: borderRadius,
            backgroundColor: backgroundColor,
            marginBottom: marginBottom
        }} 
        onPress={CLICK}
        activeOpacity={0.8}
    >
        <Text 
            style={{
                color: color,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                fontSize: fontSize
            }}
        >{TEXT}</Text>
    </TouchableOpacity>
  );
}