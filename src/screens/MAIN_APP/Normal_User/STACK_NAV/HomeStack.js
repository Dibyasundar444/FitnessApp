import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Information from '../SignUp_Pages/Information';
import Interests from '../SignUp_Pages/Interests';
import SubmitDetails from '../SignUp_Pages';
import HomeScreen from '../HomeScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <View style={{flex:1,backgroundColor:"#000"}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({})