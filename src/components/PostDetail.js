import React from 'react'
import { View, Text, Image } from 'react-native'
import styles  from '../../assets/style/layoutStyle'

const PostDetail = ({result}) => {    
    return (
        <View style={styles.postDetailContainer}>
            <View>
                <Image style={styles.postDetailImage} source={result.photo} />
                <Text style={styles.txtThin}>{result.rating} Stars, {result.review_count} Review</Text>
            </View>

            <View style={styles.postDetailContent}>
                <Text style={styles.titleStyle}>{result.name}</Text>
                <Text style={styles.desStyle}>{result.description.substring(0, 70)}</Text>
            </View>
        </View>
    )
}

export default PostDetail
