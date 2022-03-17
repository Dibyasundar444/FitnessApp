import React from "react";
import {
    View,
    ImageBackground
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';


export default function Background({MainBody}){
    return(
        <ImageBackground 
            source={require('../assets/yoga1.jpg')} 
            style={{height:"100%",width:"100%"}} 
            resizeMode="cover"
        >
            <LinearGradient 
                colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,1)']} 
                style={{flex:1}}
                start={{x: 0.2, y: 0.0}} end={{x: 0.1, y: 1.0}}
                locations={[0,0.4,0.8]}
            >
                <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.3)"}}>
                    {MainBody}
                </View>
            </LinearGradient>
        </ImageBackground>
    );
}