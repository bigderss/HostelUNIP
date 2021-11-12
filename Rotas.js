import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './SRC/Login/Login';
import PreLoad from './SRC/Preload/PreLoad';
import Home from './SRC/Home/Home';





const Stack = createNativeStackNavigator();

export default () => (
    
              <Stack.Navigator
              initialRouteName='Login'
              screenOptions={{
                        headerShown:false,

              }}
              >
                 <Stack.Screen  name="Login" component={Login}/>
                 <Stack.Screen  name="PreLoad" component={PreLoad}/>
                 <Stack.Screen  name="Home" component={Home}/>
             </Stack.Navigator>
        );

              



