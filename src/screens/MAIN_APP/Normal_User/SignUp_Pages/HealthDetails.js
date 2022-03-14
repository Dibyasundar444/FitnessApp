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

export default function HealthDetails({nav}) {

  return (
    <View style={STYLES.container}>
        <View style={STYLES.body.user.signUp.subContainer}>
            <St_Line WIDTH={100} 
                BORDER_COLOR="gray" 
                BORDER_WIDTH={1} 
                VER_MARGIN={20} 
                BACK_COLOR="gray"
            />
            <Text style={{color:"#fff",marginVertical:20}}>Health Details</Text>
            <View style={{}}>
            </View>
            <View style={STYLES.body.user.signUp.flexEnd}>
                <SubmitBtn 
                    width="85%"
                    backgroundColor="#ed4d21"
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