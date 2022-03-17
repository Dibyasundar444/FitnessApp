import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DoctorScreen from '../DoctorScreen';

const Stack = createNativeStackNavigator();

export default function DoctorStack() {
  return (
    <View style={{flex:1,backgroundColor:"#000"}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="DoctorScreen" component={DoctorScreen} />
        </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({})