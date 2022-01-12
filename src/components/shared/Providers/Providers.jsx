import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export default function StoreProvider ({ children }){
    
    const [user, setUser] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                user,
                setUser



            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}