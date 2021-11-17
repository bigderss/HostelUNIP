import React from "react";
import {Container} from '../Perfil/Styles'
import { TouchableOpacity } from "react-native";
import { Avatar, PricingCard } from 'react-native-elements';





const Perfil =()=>{






    return(
        <Container>
             <Avatar
    size="xlarge"
    title="CE"
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>
            <PricingCard
          
          color="#4f9deb"
          containerStyle={{marginTop:50}}
         title="Carlos Eduardo "
         price=""
         info={['22 Anos', 'RG:52.264.***.-*', 'CPF:463.443.***-***', 'Email:Carlos.*****@aluno.unip.br ']}
       button={{ title: 'Editar', icon: 'edit' }}




/>
              

                

        </Container>
        

    )

};

export default Perfil;