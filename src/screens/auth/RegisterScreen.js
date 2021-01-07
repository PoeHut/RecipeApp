import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles  from '../../../assets/style/layoutStyle'
import AuthValidation from '../../hooks/AuthValidation';
import EmailBox from '../../components/EmailBox'
import PasswordBox from '../../components/PasswordBox'

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [confirmSecureText, setConfirmSecureText] = useState(true)
    const [secureText, onPassword] = AuthValidation.onChangeSecurity()

    const filterSecureText = (seccuretxt) => {
        return seccuretxt == 'conSecureTxt' ? confirmSecureText : secureText
    }

    return (
        <View style={styles.loginContainer}>            
            <View style={styles.loginHeader}>
                <Animatable.Image animation="slideInDown" duration={3000} style={styles.logoStyle} source={require('../../../assets/img/images/waiter.png')} />
                <Animatable.Text animation="zoomIn" duration={3000} style={styles.textStyle}>Yummy</Animatable.Text>
            </View>
            
            <View style={styles.loginBody}>
                <View style={styles.loginTitle}>
                    <Text style={styles.loginTitleText}>REGISTER</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{marginBottom: 50}}>                
                        <EmailBox
                            email = {email}
                            onChangeEmail = {newtext => setEmail(newtext)}
                        />
                        <PasswordBox 
                            placeHolder="Password"
                            secureText = {filterSecureText('secureTxt')}
                            onChangePassword = {newpwd => setPassword(newpwd)}
                            showPassword = {() => onPassword()}
                        />

                        <PasswordBox 
                            placeHolder="Confirm Password"
                            secureText = {filterSecureText('conSecureTxt')}
                            onChangePassword = {newcfrpwd => setConfirmPassword(newcfrpwd)}
                            showPassword = {() => setConfirmSecureText(!confirmSecureText) }
                        />                        
                    </View>

                    <TouchableOpacity style={styles.buttonYellow}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonBlue} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>            
        </View>        
    )
}

export default RegisterScreen
