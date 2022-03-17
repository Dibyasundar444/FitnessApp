import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import Background from '../../../common_STYLES/CommonBackground';
import { STYLES } from '../../../common_STYLES/style';
import Header from '../../../utils/Header';

export default function ChatScreen() {

  const Body=()=>{
    return(
      <View style={{flex:1,backgroundColor:"#000"}}>
        <Header isDoctor isTitle title="Notifications" />
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