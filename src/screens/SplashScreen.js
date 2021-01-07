import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles  from '../../assets/style/layoutStyle'

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.SplashContainer}>
            <View style={styles.imageStyle}>
                <Image source={require('../../assets/img/chef.png')} />
            </View>           
            
            <View style={{alignItems: 'center'}}>
                <Animatable.Text animation="jello" style={styles.textStyle}>Yummy</Animatable.Text>
                <Animatable.Text animation="slideInLeft" style={styles.textDim}>It's time to cook</Animatable.Text>
                <Animatable.Text animation="slideInRight"Text style={styles.textDim}>delicious food!</Animatable.Text>
                <TouchableOpacity style={styles.buttonOrange} onPress={() => navigation.navigate('Auth')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SplashScreen
