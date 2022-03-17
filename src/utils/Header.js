import React from 'react';
import { 
    StyleSheet, 
    TouchableOpacity, 
    View,
    Text 
} from 'react-native';
import { LightGray } from './Color';
import Icon_Menu from '../assets/Icons/Icon_Menu.svg';
import Icon_Bell from '../assets/Icons/Icon_Bell.svg';
import Icon_Search from '../assets/Icons/Icon_Search.svg';


export default function Header({isHome,isDoctor,isTitle,title}) {
  return (
    <View
        style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            marginTop:20,
            marginHorizontal:20
        }}
    >
        <TouchableOpacity
            style={{
                justifyContent:"center",
                alignItems:"center",
                height:45,
                width:45,
                borderRadius:45/2,
                backgroundColor:LightGray
            }}
        >
            <Icon_Menu />
        </TouchableOpacity>
        {
            isTitle &&
            <Text
                style={{
                    color:"#fff",
                    fontWeight:'700',
                    fontSize:16,
                    fontFamily:"ROBOTO",
                    letterSpacing:2
                }}
            >{title}</Text>
        }
        <TouchableOpacity
            style={{
                justifyContent:"center",
                alignItems:"center",
                height:45,
                width:45,
                borderRadius:45/2,
                backgroundColor:LightGray
            }}
        >
            {
                isHome && <Icon_Bell />
            }
            {
                isDoctor && <Icon_Search />
            }
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})