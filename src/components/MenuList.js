import React, {useState, useEffect}  from 'react'
import { View, TouchableOpacity, FlatList } from 'react-native'
import styles  from '../../assets/style/layoutStyle'
import MenuDetail from './MenuDetail'
import useResults  from '../api/Menu'

const MenuList = () => {
    const [menu, setMenu] = useState(null)
    const {menus} = useResults()
    
    useEffect(() => {
        setMenu(menus);
    }, [])

    return (
        <View style={styles.menuContainer}>
           <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data = {menu}
                        keyExtractor = {result => result.id}
                        renderItem = {({item}) => {
                            return (
                                <TouchableOpacity>
                                    <MenuDetail result = {item} />
                                </TouchableOpacity>    
                            )
                        }}
                    />
        </View>
    )
}

export default MenuList
