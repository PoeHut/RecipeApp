import React from 'react'
import { View, Text, Image } from 'react-native'
import styles  from '../../assets/style/layoutStyle'

const MenuDetail = ({result}) => {
    return (
        <View style={styles.menuDetailContainer}>            
            <Image source={result.photo} style={styles.menuImage} />
            <Text style={styles.menuText}>{result.name}</Text>
        </View>
    )
}

export default MenuDetail
