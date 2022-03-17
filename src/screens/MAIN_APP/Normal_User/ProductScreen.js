import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    TouchableOpacity,
    Image 
} from 'react-native';
import Background from '../../../common_STYLES/CommonBackground';
import { STYLES } from '../../../common_STYLES/style';
import { PRODUCTS } from '../../../DummyData/data';
import Header from '../../../utils/Header';

export default function ProductScreen() {

  const Body=()=>{
    return(
      <View style={{flex:1,backgroundColor:"#000"}}>
        <Header isDoctor isTitle title="All Products" />
        <View style={{flex:1,marginHorizontal:10}}>
          <ScrollView 
          style={{marginTop:15}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:80,paddingHorizontal:10,paddingTop:15}}
          >
            <View 
              style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"flex-start",
                flexWrap:"wrap"
              }}
            >
              {
                PRODUCTS.map((item)=>(
                  <TouchableOpacity
                    key={item.id}
                    style={{
                      paddingBottom:10,
                      width:"48%",
                      overflow:"hidden",
                      borderRadius:10,
                      backgroundColor:"#fff",
                      marginBottom:10
                    }}
                    activeOpacity={0.95}
                  >
                    <View
                      style={{
                        height:150,
                        width:"100%",
                        borderBottomLeftRadius:10,
                        borderBottomRightRadius:10,
                        overflow:"hidden",
                        elevation:5,
                        backgroundColor:"#fff",
                        paddingBottom:5
                      }}
                    >
                      <Image 
                        source={item.img}
                        style={{
                          height:"100%",
                          width:"100%",
                          resizeMode:"contain"
                        }}
                      />
                    </View>
                    <View style={{marginTop:5,marginHorizontal:10}}>
                      <Text style={{color:"gray",fontSize:11}}>{item.text1}</Text>
                      <Text style={{color:"gray",fontSize:11}}>{item.text2}</Text>
                      <Text style={{color:"#000",fontSize:12,fontWeight:"600"}}>{item.text3}</Text>
                      <Text style={{color:"#000",fontSize:13}}>₹ {item.price}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
  return (
    <View style={STYLES.container}>
        <Background MainBody={<Body />} />
    </View>
  );
}

const styles = StyleSheet.create({})