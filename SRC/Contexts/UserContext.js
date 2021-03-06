
import React, {createContext,useReducer} from "react";
import { InitialState,UseReducer } from "../Reducers/UserReducer";

export const UserContext = createContext();

export default ({children}) => {
    const [state, dispatch] = useReducer(UseReducer, InitialState);


return(
    <UserContext.Provider value={{state, dispatch}}>
        {children}
    </UserContext.Provider>
)
}