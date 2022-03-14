import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';


const SLIDER_WIDTH = Dimensions.get('window').width;


export default function Box({DATA,isProduct,isDoctor}) {
   
    const ITEM_WIDTH = 170;
    const ITEM_HEIGHT = isDoctor ? 230 : 250;
    const carousel=useRef();
    
    const _renderItem=({item})=>(
        <TouchableOpacity 
            style={{
                height:ITEM_HEIGHT,
                width:ITEM_WIDTH,
                backgroundColor:"#fff",
                borderRadius:10,
                marginLeft:-ITEM_WIDTH/2,
            }}
            activeOpacity={0.8}
        >
            <ImageBackground
                source={item.img} style={{
                    width: ITEM_WIDTH,
                    height: isDoctor ? (ITEM_HEIGHT/1.5) : (ITEM_HEIGHT/1.5 - 20),
                    borderRadius: 10,
                    overflow:"hidden",
                    elevation: 5,
                    backgroundColor:"#fff"
                }}
            >
                {
                    isDoctor &&
                    <View style={styles.shadow}>
                        <View 
                            style={{
                                flexDirection:"row",
                                marginRight:10,
                                marginTop:10
                            }}
                        >
                            <AntDesign name='star' color="#ed9d26" size={16} />
                            <Text style={styles.rating}>({item.rating})</Text>
                        </View>
                    </View>
                }
            </ImageBackground>
            {
                isDoctor &&
                <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                    <Text style={{color:"#000",fontSize:13,fontWeight:"500"}}>{item.name}</Text>
                    <Text style={{color:"gray",fontSize:13}}>{item.desc}</Text>
                </View>
            }
            {
                isProduct &&
                <View style={{justifyContent:"center",flex:1,marginLeft:10}}>
                    <Text style={{color:"gray",fontSize:12}}>{item.text1}</Text>
                    <Text style={{color:"gray",fontSize:12}}>{item.text2}</Text>
                    <Text style={{color:"#000",fontSize:13,fontWeight:"700"}}>{item.text3}</Text>
                    <Text style={{color:"#000"}}>₹ {item.price}</Text>
                </View>
            }
        </TouchableOpacity>
    );
  return (
    <Carousel
        ref={carousel}
        layout={"default"}
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
    />
  );
}

const styles = StyleSheet.create({
    shadow: {
        flex:1,
        backgroundColor:"rgba(0,0,0,0.4)",
        alignItems:"flex-end"
    },
    rating:{
        color:"#fff",
        fontSize:12,
        fontWeight:'500',
        marginLeft:5
    }
})