import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import St_Line from '../utils/St_Line';
import { STYLES } from '../common_STYLES/style';
import SubmitBtn from '../utils/Submit_Btn';

const { height, width } = Dimensions.get('window');

export default function SignIn({navigation}) {
  return (
    <View style={[STYLES.container,{alignItems:"center"}]}>
        <View style={styles.inputField}>
            <Text style={{color:"#000",marginLeft:10}}>+91</Text>
            <St_Line 
                HEIGHT={30}
                BORDER_WIDTH={0.5}
                HOR_MARGIN={10}
            />
            <TextInput 
                placeholder='enter your Mobile Number'
                placeholderTextColor="gray"
                style={styles.input}
                keyboardType="number-pad"
                maxLength={10}
            />
        </View>
        <SubmitBtn 
            width="80%"
            backgroundColor="#ed4d21"
            paddingVertical= {12}
            marginTop= {10}
            borderRadius= {10}
            marginBottom={20}
            TEXT="Get OTP"
            color="#fff"
            fontWeight='700'
            letterSpacing={1}
            fontSize={16}
            CLICK={()=>navigation.navigate('OTP')}
        />
        <St_Line 
            WIDTH="85%"
            BORDER_WIDTH={0.5}
            BORDER_COLOR="#fff"
            VER_MARGIN={25}         
        />
        <Text style={styles.textOPTIONAL}>Or continue with</Text>
        <View 
            style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                marginTop: 20
            }}
        >
            <TouchableOpacity
                style={styles.GOOGLE_APPLE}
                activeOpacity={0.8}
            >
                <Text style={{color:"#000"}}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.GOOGLE_APPLE,{marginLeft:5}]}
                activeOpacity={0.8}
            >
                <Text style={{color:"#000"}}>G</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    inputField: {
        backgroundColor:"#fff",
        width:"80%",
        flexDirection:"row",
        alignItems:"center",
        marginTop: height/2,
        borderRadius: 10
    },
    submitBtn: {
        width:"80%",
        backgroundColor:"#ed4d21",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical: 12,
        marginTop: 20,
        borderRadius: 10
    },
    textOPTIONAL: {
        textTransform:"uppercase",
        letterSpacing:1,
        fontSize:13,
        color:"#fff"
    },
    GOOGLE_APPLE: {
        justifyContent:"center",
        alignItems:"center",
        width:"35%",
        paddingVertical:10,
        backgroundColor: "#fff",
        borderRadius:10
    },
    input: {
        color:"#000"
    }
})