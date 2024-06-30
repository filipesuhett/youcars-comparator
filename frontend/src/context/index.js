import { createContext, useState } from "react";

const AppContext = createContext();

export function appWrapper({children }) {
    let [state, setState] = useState('hello')

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}