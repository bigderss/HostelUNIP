import React from "react";
import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons'; 

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

export default ({placeholder,value,onChangeText,password})=>{
    return(
        <InputArea>
       
        
        <Entypo name="lock" size={24} color="black" style={{marginTop:19, color:"#268596"}} />
        <Input placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        />
        </InputArea>

    )
}