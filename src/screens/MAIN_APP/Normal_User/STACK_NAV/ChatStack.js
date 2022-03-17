import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../ChatScreen';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <View style={{flex:1,backgroundColor:"#000"}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({})