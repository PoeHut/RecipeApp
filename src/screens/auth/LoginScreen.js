import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles  from '../../../assets/style/layoutStyle'
import AuthValidation from '../../hooks/AuthValidation';
import EmailBox from '../../components/EmailBox'
import PasswordBox from '../../components/PasswordBox'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(null)
    const [secureText, onPassword] = AuthValidation.onChangeSecurity()

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginHeader}>
                <Animatable.Image animation="slideInDown" duration={3000} style={styles.logoStyle} source={require('../../../assets/img/images/waiter.png')} />
                <Animatable.Text animation="zoomIn" duration={3000} style={styles.textStyle}>Yummy</Animatable.Text>
            </View>

            <View style={styles.loginBody}>
                <View style={styles.loginTitle}>
                    <Text style={styles.loginTitleText}>LOGIN</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <EmailBox
                        email = {email}
                        onChangeEmail = {newtext => setEmail(newtext)}
                    />
                    <PasswordBox 
                        password = {password}
                        placeHolder="Password"
                        secureText = {secureText}
                        onChangePassword = {newpwd => setPassword(newpwd)}
                        showPassword = {() => onPassword()}
                    />
                </View>

                <TouchableOpacity style={styles.buttonYellow} onPress={() => navigation.navigate('BottomTab')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBlue} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>        
    )
}

export default LoginScreen