import React, {createContext,useContext, useReducer} from "react";
import redurcers from "../reducers/sidebarReducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../Actions/Actions";


const initialState = {
    isSidebarOpen: false
}

const sideBarContext = createContext({});


export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(redurcers, initialState);

    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR});
    }

    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR});
    }

    return (
        <sideBarContext.Provider value={{...state, openSidebar, closeSidebar}}>
            {children}
        </sideBarContext.Provider>
    )
}

export const useSidebarContext = () => {
    return useContext(sideBarContext);  
}