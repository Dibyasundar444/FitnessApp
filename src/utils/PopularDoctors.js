import React from 'react';
import {
    View,
    Text
} from "react-native";
import Box from './Box';
import BoxHeader from './BoxHeader';

const PopularDoctors=({DOCTORS,SCREEN})=>(
    <View style={{
        marginTop:40
    }}>
        <BoxHeader 
            title="Popular Doctors"
            rightTxt="See all"
            isRight={SCREEN == "Home" ? true : false}
            nav={()=>{}}
        />
        <View style={{marginTop:20}}>
            <Box 
                DATA={DOCTORS}
                isDoctor
            />
        </View>
    </View>
);

export default PopularDoctors;