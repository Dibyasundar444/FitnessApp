import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import Swiper from 'react-native-swiper';
import Dots from '../../../../utils/Dots';
import HealthDetails from './HealthDetails';
import Information from './Information';
import Interests from './Interests';

export default function SubmitDetails({navigation}) {
  return (
    <Swiper loop={false}
        dot={
            <Dots 
                backgroundColor="#fff"
                width={10}
                height={10}
                borderRadius={5}
                marginHorizontal={5}
                marginVertical={5}
            />
        }
        activeDot={
            <Dots 
                backgroundColor="#ed9d26"
                width={10}
                height={10}
                borderRadius={5}
                marginHorizontal={5}
                marginVertical={5}
            />
        }
        dotColor="#fff"
        activeDotColor='#ed9d26'
        autoplay={false}
        onIndexChanged={inddex=>console.log(inddex)}
        nextButton
    >
        <Information 
            nav={()=>navigation.navigate('HomeScreen')} 
        />
        <Interests />
        <HealthDetails 
            nav={()=>navigation.navigate('HomeScreen')} 
        />
    </Swiper>
  );
}

const styles = StyleSheet.create({})