import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Platform 
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { STYLES } from '../../../../common_STYLES/style';
import { ButtonColor } from '../../../../utils/Color';
import Dots from '../../../../utils/Dots';
import St_Line from '../../../../utils/St_Line';
import SubmitBtn from '../../../../utils/Submit_Btn';

export default function Information({nav}) {
  return (
    <View style={STYLES.container}>
        <View style={STYLES.body.user.signUp.subContainer}>
            <St_Line
                WIDTH={100} 
                BORDER_COLOR="gray" 
                BORDER_WIDTH={1} 
                VER_MARGIN={20} 
                BACK_COLOR="gray"
            />
            <Text style={{color:"#fff",marginVertical:20}}>Personal Information</Text>
            <ScrollView contentContainerStyle={{alignItems:"center"}} style={{width:"100%"}}>
                <TextInput 
                    placeholder='Full Name'
                    placeholderTextColor="#fff"
                    style={STYLES.body.user.signUp.textInput}
                />
                <TextInput 
                    placeholder='Email id'
                    placeholderTextColor="#fff"
                    style={STYLES.body.user.signUp.textInput}
                />
                <TouchableOpacity style={[STYLES.body.user.signUp.textInput,styles.cityDiv]}>
                    <Text style={{color:"#fff"}}>Select city</Text>
                    <AntDesign name='down' color="#aaa" size={16} style={{marginRight:15}} />
                </TouchableOpacity>
                <TextInput 
                    placeholder='Address'
                    placeholderTextColor="#fff"
                    style={STYLES.body.user.signUp.textInput}
                />
                <TextInput 
                    placeholder='Pincode'
                    placeholderTextColor="#fff"
                    style={STYLES.body.user.signUp.textInput}
                />
                <View style={STYLES.body.user.signUp.flexEnd}>
                    <SubmitBtn 
                        width="85%"
                        backgroundColor={ButtonColor}
                        paddingVertical= {12}
                        marginTop= {10}
                        borderRadius= {10}
                        marginBottom={20}
                        TEXT="Skip"
                        color="#fff"
                        fontWeight='700'
                        letterSpacing={2}
                        fontSize={16}
                        CLICK={nav}
                    />
                </View>
            </ScrollView>
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
    }
})