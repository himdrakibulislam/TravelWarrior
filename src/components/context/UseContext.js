import React, { createContext } from 'react';
import usefirebase from '../../hook/usefirebase'
export const getContext = createContext() ;
const UseContext = ({children}) => {
    const all = usefirebase()
    return (
        <getContext.Provider value={all}> 
            {
            children
            } 
        </getContext.Provider>
    );
};

export default UseContext;