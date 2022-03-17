import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeStack from "../STACK_NAV/HomeStack";
import DoctorStack from "../STACK_NAV/DoctorStack";
import ProductStack from "../STACK_NAV/ProductStack";
import ChatStack from "../STACK_NAV/ChatStack";
import Icon_Home from '../../../../assets/Icons/Icon_Home.svg';
import Icon_Doctor from '../../../../assets/Icons/Icon_Doctor.svg';
import Icon_Bag from '../../../../assets/Icons/Icon_Bag.svg';
import Icon_Chat from '../../../../assets/Icons/Icon_Chat.svg';
import { Icon_Active } from "../../../../utils/Color";

const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get("window");


export default function BottomTab(){

    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.bottomTab,
            tabBarHideOnKeyboard: true
        }}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} 
                options={{
                    tabBarIcon:({focused}) => (
                        <Icon_Home stroke={focused ? Icon_Active : "#FFF"} />
                    )
                }}
            />
            <Tab.Screen name="DoctorStack" component={DoctorStack} 
                options={{
                    tabBarIcon:({focused}) => (
                        <Icon_Doctor fill={focused ? Icon_Active : "#FFF"} />
                    )
                }}
            />
            <Tab.Screen name="ProductStack" component={ProductStack} 
                options={{
                    tabBarIcon:({focused}) => (
                        <Icon_Bag stroke={focused ? Icon_Active : "#FFF"} />
                    )
                }}
            />
            <Tab.Screen name="ChatStack" component={ChatStack} 
                options={{
                    tabBarIcon:({focused}) => (
                        <Icon_Chat stroke={focused ? Icon_Active : "#FFF"} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomTab: {
        backgroundColor: "#454443",
        height: 60,
        borderRadius: 15,
        // alignItems: "center",
        position:"absolute",
        bottom:0
    }
})