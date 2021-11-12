
import React from "react";
import { Container } from "../Inicio/Styles";
import img2 from "../../../Components/foto/img2.jpeg"
import { PricingCard } from 'react-native-elements';





const Inicio  =()=>{
  

    

    return(
        <Container>
          <PricingCard
          
           color="#4f9deb"
           containerStyle={{marginTop:100}}
          title="Predio"
          price="R$ 1200,00"
          info={['2 Quartos', '1 Banheiro', 'Cozinha', 'sala ']}
        button={{ title: 'COMPRE-JÁ', icon: 'home' }}

/>
<PricingCard
          
          color="#4f9deb"
          containerStyle={{marginTop:10}}
         title="Predio"
         price="R$ 1500,00"
         info={['2 Quartos', '1 Banheiro', 'Cozinha', 'sala ']}
       button={{ title: 'COMPRE-JÁ', icon: 'home' }}
       
/>
<PricingCard
          
          color="#4f9deb"
          containerStyle={{marginTop:10}}
         title="Predio"
         price="R$ 1500,00"
         info={['2 Quartos', '1 Banheiro', 'Cozinha', 'sala ']}
       button={{ title: 'COMPRE-JÁ', icon: 'home' }}
       
/>
<PricingCard
          
          color="#4f9deb"
          containerStyle={{marginTop:10}}
         title="Predio"
         price="R$ 1500,00"
         info={['2 Quartos', '1 Banheiro', 'Cozinha', 'sala ']}
       button={{ title: 'COMPRE-JÁ', icon: 'home' }}
       
/>;
 
   
        </Container>
        

    )

};

export default Inicio;