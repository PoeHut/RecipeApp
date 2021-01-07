import React from 'react'
import { View, TextInput } from 'react-native'
import styles  from '../../assets/style/layoutStyle'
import Icon from 'react-native-vector-icons/Ionicons';

const EmailBox = ({email, onChangeEmail}) => {
    return (
        <View style={styles.InputStyle}>
            <Icon name="mail" size={30} />
            <TextInput
                style={{flex: 1}}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                onChangeText = {text => onChangeEmail(text)}
            />
            {
                email ?
                <Icon name="checkmark-done" size={30} /> :
                null
            }
            
        </View>
    )
}

export default EmailBox
