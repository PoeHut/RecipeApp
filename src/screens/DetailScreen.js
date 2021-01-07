import React from 'react'
import { View, Text, Image } from 'react-native'
import styles  from '../../assets/style/layoutStyle'

const DetailScreen = ({route}) => {
    const {data} = route.params;

    return (
        <View style={styles.homeContainer}>
            <Image source={data.photo} style={styles.detailImage} />
            <Text style={styles.txtThin}>{data.rating} Stars, {data.review_count} Review</Text>
            <Text style={styles.titleStyle}>{data.name}</Text>
            <Text style={styles.desStyle}>{data.description}</Text>
        </View>
    )
}

export default DetailScreen
