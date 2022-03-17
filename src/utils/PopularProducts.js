import React from 'react';
import {
    View,
    Text
} from "react-native";
import Box from './Box';
import BoxHeader from './BoxHeader';

const PopularProducts=({PRODUCTS})=>(
    <View style={{
        marginTop:40
    }}>
        <BoxHeader 
            title="Popular Products"
            rightTxt="See all"
            isRight={true}
            nav={()=>{}}
        />
        <View style={{marginTop:20}}>
            <Box 
                DATA={PRODUCTS}
                isProduct
            />
        </View>
    </View>
);

export default PopularProducts;