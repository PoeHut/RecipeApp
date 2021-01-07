import React from 'react'
import { View, TextInput } from 'react-native'
import styles  from '../../assets/style/layoutStyle'
import Icon from 'react-native-vector-icons/Ionicons';

const PasswordBox = ({ placeHolder, secureText, onChangePassword, showPassword}) => {
    
    return (
        <View style={styles.PasswordStyle}>
            <Icon name="md-lock-closed" size={30} />
            <TextInput
                style={{flex: 1}}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={placeHolder}
                secureTextEntry={secureText}
                onChangeText = {text => onChangePassword(text)}
            />
            {
                secureText ?
                <Icon name="eye-off" size={30} onPress={() => showPassword()} /> :
                <Icon name="eye" size={30} onPress={() => showPassword()} />
            }
        </View>
    )
}

export default PasswordBox
