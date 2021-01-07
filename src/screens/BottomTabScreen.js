import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon  from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';
import MessageScreen from './MessageScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeScreenStack = () =>{
    return (
        <Stack.Navigator 
               screenOptions={{
                    initialRouteName: "Home",
                    headerLeft:false,
                    headerTitleAlign:'center',
                    headerRight:()=>(
                        <TouchableOpacity>
                            <Icon name="notifications-outline" size={23} color='#000'style={{marginRight:15}}/>
                        </TouchableOpacity>
                    )
            }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

const BottomTabScreen = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#F9A11B',
                inactiveTintColor: '#503E9D'
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={homeScreenStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="home" color={color} size={30} />
                    ),
                }} 
            />

            <Tab.Screen 
                name="Post" 
                component={PostScreen}
                options={{
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="newspaper" color={color} size={30} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Message" 
                component={MessageScreen}
                options={{
                    tabBarLabel: 'Message',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="chatbox-ellipses" color={color} size={30} />
                    ),
                }} 
            />

            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="md-person-sharp" color={color} size={30} />
                    ),
                }} 
            />
        </Tab.Navigator>
    )
}

export default BottomTabScreen
