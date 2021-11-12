import React from "react";
import { Container } from "../Configuracao/Styles";
import { ListItem, Icon } from 'react-native-elements'
import { View } from "react-native";

const list = [
    {
      title: 'Mensagens ',
    },
    {
      title: 'Tela ',
    },
    {
        title: 'Cartãoes',
      },
      {
        title: 'Historico',
      },
      {
        title: 'Ajuda',
      },
      {
        title: 'Endereço',
      },
      {
        title: 'Reclamação',
      },
      {
        title: 'Tutorial ',
      },
      {
        title: 'Veja seu Desempenho',
      },
      {
        title: 'Uber',
      },
      {
        title: 'Contratos',
      },
      {
        title: 'Licensas',
      },

]



const Configuracao =()=>{





    return(
        <Container>
           
           <View>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>

        </Container>
        

    )

};

export default Configuracao;