import React from 'react';
import { 
    View, 
    Text,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    ScrollView 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SubmitBtn from '../../../utils/Submit_Btn';
import Icon_Bell from '../../../assets/Icons/Icon_Bell.svg';
import Icon_Alarm from '../../../assets/Icons/Icon_Alarm.svg';
import Icon_Heart from '../../../assets/Icons/Icon_Heart.svg';
import Icon_Fire from '../../../assets/Icons/Icon_Fire.svg';
import Icon_Shoe from '../../../assets/Icons/Icon_Shoe.svg';
import Icon_Menu from '../../../assets/Icons/Icon_Menu.svg';



import { STYLES } from '../../../common_STYLES/style';
import BoxHeader from '../../../utils/BoxHeader';
import Box from '../../../utils/Box';
import { ButtonColor, LightGray } from '../../../utils/Color';
import PopularDoctors from '../../../utils/PopularDoctors';
import PopularProducts from '../../../utils/PopularProducts';
import Header from '../../../utils/Header';
import Background from '../../../common_STYLES/CommonBackground';
import { DOCTORS, PRODUCTS, VIDEOS } from '../../../DummyData/data';



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
                            <Icon_Heart />
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
                            <Icon_Shoe />
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
                            <Icon_Fire />
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
                            <Icon_Alarm />
                        </TouchableOpacity>
                        <Text style={styles.rate}>90</Text>
                        <View>
                            <Text style={styles.heartTxt}>WORK</Text>
                            <Text style={styles.heartTxt}>MIN</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    const TopNews=()=>(
        <View style={{
            marginTop:40
        }}>
            <BoxHeader 
                title="Top News Today's"
                nav={()=>{}}
            />
            <View style={{marginTop:20}}>
                <Box 
                    DATA={VIDEOS}
                    isVideos
                />
            </View>
        </View>
    );

    const Body=()=>{
        return(
            <>
                <Header isHome />
                <View style={{flex:1,marginHorizontal:20}}>
                    <ScrollView
                        contentContainerStyle={{paddingBottom:80}}
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
                                color={ButtonColor}
                                fontWeight='500'
                                letterSpacing={1}
                                fontSize={12}
                            />
                        </View>
                        <DailyNotivation />
                        <PopularDoctors 
                            DOCTORS={DOCTORS}
                            SCREEN="Home"
                        />
                        <PopularProducts 
                            PRODUCTS={PRODUCTS}
                        />
                        <TopNews />
                    </ScrollView>
                </View>
            </>
        );
    }

  return (
    <View style={STYLES.container}>
        <Background MainBody={<Body />} />
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
        height:45,
        width:45,
        backgroundColor:LightGray,
        borderRadius: 45/2,
        justifyContent:"center",
        alignItems:"center"
    }
})