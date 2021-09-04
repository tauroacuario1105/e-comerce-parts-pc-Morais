import React, { createContext, useState } from "react";

export const UIContext = createContext()

export const UIContextProvider = (Children) => {

    const [loading , setLoading] = useState(false)
    return (
        <UIContextProvider value={{loading, setLoading}}>
            {Children}
        </UIContextProvider>
    )
}