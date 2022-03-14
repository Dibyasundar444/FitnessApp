import React from 'react';
import { 
    View, 
    Text,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    ScrollView 
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import SubmitBtn from '../../../utils/Submit_Btn';
import St_Line from '../../../utils/St_Line';


import { STYLES } from '../../../common_STYLES/style';
import BoxHeader from '../../../utils/BoxHeader';
import Box from '../../../utils/Box';

const DOCTORS = [
    {
        "id": "0",
        "img": require("../../../assets/Doctors/doctor1.jpg"),
        "name": "Dr. Tarun Mullins",
        "desc": "Sports Medicine",
        'rating': 4.2
    },
    {
        "id": "1",
        "img": require("../../../assets/Doctors/doctor2.jpg"),
        "name": "Dr. Tarun Mullins",
        "desc": "Sports Medicine",
        'rating': 4.2
    },
    {
        "id": "2",
        "img": require("../../../assets/Doctors/doctor3.jpg"),
        "name": "Dr. Tarun Mullins",
        "desc": "Sports Medicine",
        'rating': 4.2
    }
];
const PRODUCTS = [
    {
        "id": "0",
        "img": require("../../../assets/Products/med1.jpg"),
        "text1": "Diabetes, Dietary",
        "text2": "Supplements",
        'text3': "4DM",
        "price": "1,999.00"
    },
    {
        "id": "1",
        "img": require("../../../assets/Products/med2.jpg"),
        "text1": "Diabetes, Dietary",
        "text2": "Supplements",
        'text3': "4DM",
        "price": "1,999.00"
    },
    {
        "id": "2",
        "img": require("../../../assets/Products/med1.jpg"),
        "text1": "Diabetes, Dietary",
        "text2": "Supplements",
        'text3': "4DM",
        "price": "1,999.00"
    }
];

export default function HomeScreen({navigation}) {

    const DailyNotivation=()=>(
        <View>
            <Text style={{color:"#fff",fontSize:13,fontWeight:"600",letterSpacing:1}}>Daily Motivation</Text>
            <View 
                style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"flex-start",
                    marginTop:10,
                    marginRight:10
                }}
            >
                <View>
                    <View
                        style={{flexDirection:"row",alignItems:"center"}}
                    >
                        <TouchableOpacity
                            style={styles.heart}
                        >
                            <AntDesign name='hearto' color="#fff" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.rate}>78</Text>
                        <View>
                            <Text style={styles.heartTxt}>HEART</Text>
                            <Text style={styles.heartTxt}>RATE</Text>
                        </View>
                    </View>
                    <View
                        style={{flexDirection:"row",alignItems:"center",marginTop:15}}
                    >
                        <TouchableOpacity
                            style={styles.heart}
                        >
                            <MaterialCommunityIcons name='shoe-print' color="#fff" size={24} />
                        </TouchableOpacity>
                        <Text style={styles.rate}>2586</Text>
                        <View>
                            <Text style={styles.heartTxt}>STEPS</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View
                        style={{flexDirection:"row",alignItems:"center"}}
                    >
                        <TouchableOpacity
                            style={styles.heart}
                        >
                            <SimpleLineIcons name='fire' color="#fff" size={22} />
                        </TouchableOpacity>
                        <Text style={styles.rate}>596</Text>
                        <View>
                            <Text style={styles.heartTxt}>KCAL</Text>
                        </View>
                    </View>
                    <View
                        style={{flexDirection:"row",alignItems:"center",marginTop:15}}
                    >
                        <TouchableOpacity
                            style={styles.heart}
                        >
                            <Ionicons name='alarm-outline' color="#fff" size={24} />
                        </TouchableOpacity>
                        <Text style={styles.rate}>90</Text>
                        <View>
                            <Text style={styles.heartTxt}>WPRK</Text>
                            <Text style={styles.heartTxt}>MIN</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    const PopularDoctors=()=>(
        <View style={{
            marginTop:40
        }}>
            <BoxHeader 
                title="Popular Doctors"
                rightTxt="See all"
                isRight={true}
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

    const PopularProducts=()=>(
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

  return (
    <View style={STYLES.container}>
        <ImageBackground 
            source={require('../../../assets/yoga1.jpg')} 
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
                                height:40,
                                width:40,
                                borderRadius:20,
                                backgroundColor:"#454443"
                            }}
                        >
                            <Entypo name='menu' color="#fff" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                justifyContent:"center",
                                alignItems:"center",
                                height:40,
                                width:40,
                                borderRadius:20,
                                backgroundColor:"#454443"
                            }}
                        >
                            <Fontisto name='bell' color="#fff" size={18} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,marginHorizontal:20}}>
                        <ScrollView
                            contentContainerStyle={{paddingBottom:50}}
                            showsVerticalScrollIndicator={false}
                        >
                            <Text style={{color:"#fff",fontSize:10,marginTop:40}}>@ross Blog</Text>
                            <Text style={{color:"#fff",fontSize:30,letterSpacing:3,fontWeight:"700"}}>BORN</Text>
                            <Text style={{color:"#fff",fontSize:30,letterSpacing:3,fontWeight:"700"}}>FITNESS</Text>
                            <Text style={{fontSize:13}}>
                                qwertyuiopa sdfghjklzxc vbnmertyui odxcgvhjh hsd hs s s sjbsjbsdcbsdbshsb s bs sdn
                                bcbccjcjsbsjc s sm  m, s,cncjbcjbs djchjvsdhbsdj cbajkbacjba cbmbccjdb,mkjsbsd mabcjd 
                                ccmbcjsd sdbsdjsdsdc sdccnsdcchch sdjbcjs dccdvhjbcd j hbhs csdcc
                                chjvchj dbcsdbc kjsdbccsd ccbhscbjsc j bsdjcbsdcn hbs  bsjcbh.
                            </Text>
                            <View style={{alignItems:"center"}}>
                                <SubmitBtn 
                                    width="40%"
                                    backgroundColor="#fff"
                                    paddingVertical= {8}
                                    marginTop= {10}
                                    borderRadius= {10}
                                    marginBottom={20}
                                    TEXT="Read More"
                                    color="#ed4d21"
                                    fontWeight='500'
                                    letterSpacing={1}
                                    fontSize={12}
                                />
                            </View>
                            <DailyNotivation />
                            <PopularDoctors />
                            <PopularProducts />
                        </ScrollView>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    heartTxt: {
        // color:"#fff",
        fontSize:9,
        letterSpacing:1
    },
    rate: {
        color:"#fff",
        fontSize:20,
        fontWeight:'700',
        marginRight:5,
        marginLeft:10,
        letterSpacing:2
    },
    heart: {
        height:40,
        width:40,
        backgroundColor:"#454443",
        borderRadius: 20,
        justifyContent:"center",
        alignItems:"center"
    }
})