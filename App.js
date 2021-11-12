import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import Rotas from "./Rotas"
import UserContextProvider from './SRC/Contexts/UserContext'

export default function App() {
          return(
            <UserContextProvider>
                  <NavigationContainer>
                    <Rotas/>
                  </NavigationContainer>
            </UserContextProvider>
          )

};
