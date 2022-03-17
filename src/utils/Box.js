import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';
import Icon_Star from '../assets/Icons/Icon_Star.svg';
import Icon_Play from '../assets/Icons/Icon_Play.svg';


const SLIDER_WIDTH = Dimensions.get('window').width;


export default function Box({DATA,isProduct,isDoctor,isVideos}) {
   
    const ITEM_WIDTH = isVideos ? SLIDER_WIDTH/1.2 : 170;
    const ITEM_HEIGHT = isDoctor ? 230 : 250;
    const IMG_HEIGHT = isProduct ? (ITEM_HEIGHT/1.5 - 20) : (ITEM_HEIGHT/1.5)
    const carousel=useRef();
    
    const _renderItem=({item})=>(
        <TouchableOpacity 
            style={{
                height:isVideos ? 220 : ITEM_HEIGHT,
                width:ITEM_WIDTH,
                backgroundColor:"#fff",
                borderRadius:10,
                marginLeft:!isVideos ? -ITEM_WIDTH/1.9 : -20,
            }}
            activeOpacity={0.8}
        >
            <ImageBackground
                source={item.img} 
                style={{
                    width: ITEM_WIDTH,
                    height: isVideos ? (ITEM_HEIGHT/1.8) : IMG_HEIGHT,
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
                                marginTop:10,
                                alignItems:"center"
                            }}
                        >
                            <Icon_Star />
                            <Text style={styles.rating}>({item.rating})</Text>
                        </View>
                    </View>
                }
                {
                    isVideos &&
                    <View style={styles.videosImg}>
                        <Icon_Play />
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
            {
                isVideos &&
                <View style={{marginHorizontal:10,marginVertical:10}}>
                    <Text style={{color:"#000",fontSize:12,fontWeight:"500"}}>{item.text1}</Text>
                    <View
                        style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignItems:"center",
                            marginTop:5
                        }}
                    >
                        <Text style={{color:"gray",fontSize:12}}>{item.text2}</Text>
                        <Text style={{color:"gray",fontSize:12}}>{item.text3}</Text>
                    </View>
                </View>
            }
        </TouchableOpacity>
    );
  return (
    isVideos ? 
    <Carousel
        ref={carousel}
        layout="tinder"
        layoutCardOffset={9}
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
    />
    :
    <Carousel
        ref={carousel}
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
        fontSize:11,
        fontWeight:'500',
        marginLeft:5
    },
    videosImg: {
        flex:1,
        backgroundColor:"rgba(0,0,0,0.4)",
        alignItems:"center",
        justifyContent:"center"
    }
})