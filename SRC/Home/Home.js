import React, { useState } from "react";

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SingMessageButton,
    SingMessageButtonText,
    SingMessageButtonTextBold
} from './Styles'
import { Fontisto } from '@expo/vector-icons'; 
import SignInput from "../Components/SignInput";
import SenhaInput from "../Components/SenhaInput";




const Home = () =>{

    const [emailField, setEmailField] = useState('kadug10@outlook.com');
    const [passwordField, setPasswordField] = useState('');


    return(
        <Container>
               <Fontisto name="hotel" size={100} color="white" />
        <InputArea>
            <SignInput 
            placeholder="Digite seu Email "
            value={emailField}
            onChangeText={t=>setEmailField(t)}
            />
            <SenhaInput
            placeholder="Digite sua Senha "
            value={passwordField}
            onChangeText={t=>setPasswordField(t)}
            password={true}
            />
            
          
            


            <CustomButton>
                <CustomButtonText>Login</CustomButtonText>
            </CustomButton>

        </InputArea>
            <SingMessageButton>
                <SingMessageButtonText>Ainda não possui uma conta?</SingMessageButtonText>
                <SingMessageButtonTextBold>Cadastre-se</SingMessageButtonTextBold>
            </SingMessageButton>
        
        
        
        
        </Container>
    )

};

export default Home;