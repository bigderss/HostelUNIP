import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Text } from "react-native";

const InputArea = styled.View`
        width: 100%;
        height:60px;
        background-color:#83d6e3;
        flex-direction:row; 
        border-radius:30px;
        padding-left:15px;
        margin-bottom:15px; 
`;

const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color:#268596;
    margin-left:10px;
    
`;

export default ({placeholder,value,onChangeText})=>{
    return(
        <InputArea >
            
        <MaterialIcons name="email" size={24} color="black" style={{marginTop:19, color:"#268596"}} />
        <Input placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        />
        
        </InputArea>

    )
}