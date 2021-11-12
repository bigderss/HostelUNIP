import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import {Container} from '../Notificacao/Styles'







const Notificacao =()=>{
    return(
        <Container>
            <AntDesign name="exclamationcircleo" size={50} color="white" />
           <TouchableOpacity>
               <Text
               style={{color:'#fff'}}
               >
                   Sem Notificacao !
               </Text>
           </TouchableOpacity>
        </Container>
        

    )

};

export default Notificacao;