import React, { createContext, useState } from 'react';

export const Context = createContext()

export default function Provider({ children }) {

    const [editData, setEditData] = useState([])

    return (
        <Context.Provider value={{ editData, setEditData }}>
            {children}
        </Context.Provider>
    )

}