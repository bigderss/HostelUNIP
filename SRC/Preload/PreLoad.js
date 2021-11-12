import React,{useEffect,useState} from "react";
import { Text } from "react-native";
import {Container, LoadingIcon} from '../Preload/Styles'
import { SimpleLineIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from '@expo/vector-icons'; 




const PreLoad = () =>{

        const navigation = useNavigation();

        useEffect(()=> {
                    const checkToken = async () =>{
                            const token = await AsyncStorage.getItem('token');
                            if(token) {

                            }else{ 
                                    navigation.navigate('Home');
                            }
                    }

            checkToken()
        },[]);




    return(
        <Container>
              { /* <MaterialCommunityIcons name="sunglasses" size={120} color="black" />  */}
              <Fontisto name="hotel" size={100} color="white" />
                <LoadingIcon size="large" color="white"/>

        </Container>
            
    

    )

};

export default PreLoad;