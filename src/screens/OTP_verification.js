import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { STYLES } from '../common_STYLES/style';
import SubmitBtn from '../utils/Submit_Btn';

export default function OTP_verification({navigation}) {

    const [num, setNum] = useState("");
    const [counter, setCounter] = React.useState(59);
    React.useEffect(() => {
        const timer = counter > 0 && setInterval(() => {
            let newTime =('0' + (counter - 1).toString()).slice(-2);
            setCounter(newTime);
        }, 1000);
        return () => clearInterval(timer);
    }, [counter]);  

  return (
    <View style={STYLES.container}>
        <MaterialIcons name='arrow-back-ios' 
            color="#fff" size={18} 
            style={{marginLeft:30,marginTop:30}} 
            onPress={()=>navigation.goBack()}
        />
        <View style={STYLES.container_pos}>
            <Text style={{color:"#fff"}}>Please enter the 4-digit verification code</Text>
            <OTPInputView
                style={styles.input}
                pinCount={4}
                code={num}
                onCodeChanged={(code)=>setNum(code)}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code) => setNum(code)}
            />
            <SubmitBtn 
                width="80%"
                backgroundColor="#ed4d21"
                paddingVertical= {12}
                marginTop= {10}
                borderRadius= {10}
                marginBottom={20}
                TEXT="Verify"
                color="#fff"
                fontWeight='700'
                letterSpacing={1}
                fontSize={16}
                CLICK={()=>navigation.navigate('NormalUser')}
            />
            <Text style={{color:"#fff"}}>Re-send OTP (00:{counter})</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textInputDiv: {
        alignItems:"center",
        marginVertical: 20,
        backgroundColor:"#000"
    },
    underlineStyleBase: {
        width: 68,
        height: 50,
        elevation: 5,
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: 10

    },
    input: {
        width: "80%",
        height: 50,
        marginVertical:20
    },
})