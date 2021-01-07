import React, {useState, useEffect}  from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import useResults  from '../api/Result'
import PostDetail from './PostDetail'

const PostList = () => {
    const navigation = useNavigation();
    const [result, setResult] = useState(null)
    const {results} = useResults()

    useEffect(() => {
        setResult(results)
    }, [])

    return (
        <View style={{flex: 1}}>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    data={result}
                    keyExtractor={result => result.id}
                    renderItem = { ({item}) => {
                        return (
                                <TouchableOpacity onPress = {() => navigation.navigate('Detail', {data: item})}>
                                    <PostDetail result = {item} />
                                </TouchableOpacity>
                        )
                    }}
                />
        </View>
    )
}

export default PostList
