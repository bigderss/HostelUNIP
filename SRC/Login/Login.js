import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Configuracoes from '../Home/TabPaginas/Configuracao/Configuracoes'
import  Inicio from '../Home/TabPaginas/Inicio/Inicio'
import  Notificacao from '../Home/TabPaginas/Notificacao/Notificacao'
import  Perfil from '../Home/TabPaginas/Perfil/Perfil'
import  Home   from '../Home/Home'
import { color } from "react-native-elements/dist/helpers";
import {Entypo, Feather} from '@expo/vector-icons'



const Tab = createBottomTabNavigator();

const Login = () =>{

 
        return(
        
           <Tab.Navigator
           screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'#121212',
            tabBarInactiveBackgroundColor:'#121212',
            headerBackgroundContainerStyle:'transparent',
            
            
            
            tabBarStyle:{
                    borderTopColor:'#63c2d1',
                    borderColor:'#63c2d1',
                    

            },
            
            style:{
                
            }
            

  }}
           
            
           >
                <Tab.Screen 
                name='Inicio' 
                component={Inicio}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Entypo name="home" size={size} color={color} />

                    )
                }}
                />

                <Tab.Screen
                 name='Notificacao' 
                 component={Notificacao}
                 options={{
                    tabBarIcon: ({size, color}) => (
                            <Entypo name="notification" size={size} color={color} />

                    )
                }}
                 />

                <Tab.Screen 
                name='Perfil' 
                component={Perfil}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Entypo name="user" size={size} color={color} />

                    )
                }}
                />

                <Tab.Screen
                 name='Configuraçao'
                  component={Configuracoes}
                  options={{
                    tabBarIcon: ({size, color}) => (
                            <Entypo name="" size={size} color={color} />

                    )
                }}
                  />

                <Tab.Screen 
                name='Login' 
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Entypo name="login" size={size} color={color} />

                    )
                }}
                />

           </Tab.Navigator>
                

    
        

    )


};

export default Login;