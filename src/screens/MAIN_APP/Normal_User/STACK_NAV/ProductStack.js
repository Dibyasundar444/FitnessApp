import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductScreen from '../ProductScreen';

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
    <View style={{flex:1,backgroundColor:"#000"}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({})