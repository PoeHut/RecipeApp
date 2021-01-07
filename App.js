import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import BottomTabScreen from './src/screens/BottomTabScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Auth" 
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="BottomTab"
          component={BottomTabScreen}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Detail'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
