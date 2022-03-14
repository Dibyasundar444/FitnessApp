import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView 
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { STYLES } from '../../../../common_STYLES/style';
import Dots from '../../../../utils/Dots';
import St_Line from '../../../../utils/St_Line';
import SubmitBtn from '../../../../utils/Submit_Btn';

export default function Interests() {

    const INTERESTS = ["Yoga","Hiking","Swimming","Running & Jogging","Aerobics",
                    "Yoga","Hiking","Swimming","Running & Jogging","Aerobics",
                    "Yoga","Hiking","Swimming","Running & Jogging","Aerobics"]
  return (
    <View style={STYLES.container}>
        <View style={STYLES.body.user.signUp.subContainer}>
            <St_Line WIDTH={100} 
                BORDER_COLOR="gray" 
                BORDER_WIDTH={1} 
                VER_MARGIN={20} 
                BACK_COLOR="gray"
            />
            <Text style={{color:"#fff",marginVertical:20}}>Select Your Interests</Text>
            <View style={{flexDirection:"row",flexWrap:'wrap',justifyContent:"space-evenly",marginHorizontal:10}}>
                {
                    INTERESTS.map(((item,index)=>(
                        <TouchableOpacity style={styles.box} key={index}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )))
                }
            </View>
            <View style={STYLES.body.user.signUp.flexEnd}>
                <SubmitBtn 
                    width="85%"
                    backgroundColor="#ed4d21"
                    paddingVertical= {12}
                    marginTop= {10}
                    borderRadius= {10}
                    marginBottom={20}
                    TEXT="Save Details"
                    color="#fff"
                    fontWeight='700'
                    letterSpacing={2}
                    fontSize={16}
                />
                {/* <Dots 
                    color1="#ed9d26" 
                    color2="#ed9d26" 
                    color3="#fff" 
                    size={12}
                /> */}
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cityDiv: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
        height: 50
    },
    box: {
        borderWidth: 1,
        borderColor: "#ed9d26",
        borderRadius: 10,
        paddingVertical:8,
        paddingHorizontal: 25,
        marginHorizontal:2,
        marginVertical:10
    }
})