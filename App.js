import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import OTP_verification from './src/screens/OTP_verification';
import { NavigationContainer } from '@react-navigation/native';
import SubmitDetails from './src/screens/MAIN_APP/Normal_User/SignUp_Pages';
import HomeStack from './src/screens/MAIN_APP/Normal_User/STACK_NAV/HomeStack';
import BottomTab from './src/screens/MAIN_APP/Normal_User/index/BottomTab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex:1,backgroundColor:"#000"}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="OTP" component={OTP_verification} />
          <Stack.Screen name="SubmitDetails" component={SubmitDetails} />
          <Stack.Screen name="NormalUser" component={BottomTab} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})