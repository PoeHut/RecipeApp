import React from 'react'
import { View } from 'react-native'
import styles  from '../../assets/style/layoutStyle'
import MenuList  from '../components/MenuList';
import PostList  from '../components/PostList';

const HomeScreen = () => {
    return (
        <View style={styles.homeContainer}>
            <MenuList />
            <PostList />
        </View>
    )
}

export default HomeScreen