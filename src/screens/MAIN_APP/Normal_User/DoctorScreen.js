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
import { DOCTORS, SPECIALIST } from '../../../DummyData/data';
import Header from '../../../utils/Header';
import BoxHeader from '../../../utils/BoxHeader';
import PopularDoctors from '../../../utils/PopularDoctors';

export default function DoctorScreen() {

  const Body=()=>{
    return(
      <View style={{flex:1,backgroundColor:"#000"}}>
        <Header isDoctor />
        <View style={{flex:1,marginHorizontal:20}}>
          <ScrollView
            contentContainerStyle={{paddingBottom:80}}
            showsVerticalScrollIndicator={false}
          >
            <PopularDoctors 
              DOCTORS={DOCTORS}
              SCREEN="Doctor"
            />
            <View style={{marginTop:30}}>
              <BoxHeader 
                title="Our Specialist"
              />
              {
                SPECIALIST.map(item=>(
                  <TouchableOpacity
                    key={item.id}
                    style={{
                      backgroundColor:"#fff",
                      flexDirection:"row",
                      alignItems:"center",
                      width:"100%",
                      borderRadius:10,
                      paddingVertical:10,
                      marginTop:10
                    }}
                    activeOpacity={0.7}

                  >
                    <View style={{
                      height:50,
                      width:50,
                      overflow:"hidden",
                      marginHorizontal:15,
                      borderRadius:50/2
                    }}>
                      <Image 
                        source={item.img}
                        style={{height:"100%",width:"100%"}}
                        resizeMode="cover"
                      />
                    </View>
                    <Text 
                      style={{
                        color:"#000",
                        letterSpacing:1,
                        fontFamily:"ROBOTO",
                        fontWeight:"700"
                      }}
                    >
                      {item.specialization}
                    </Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }


  return (
    <View style={STYLES.container}>
        <Background MainBody={<Body />} />
    </View>
  );
}

const styles = StyleSheet.create({})