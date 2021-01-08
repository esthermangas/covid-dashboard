import React, {createContext, useState, useContext} from 'react';

const CountryContext = createContext();

export const CountryContextProvider = (props) => {
    const {children} = props;
    const [country, setCountry] = useState('ESP');
    return (
        <CountryContext.Provider value={{country, setCountry}}>
            {children}
        </CountryContext.Provider>
    )
};

export const useCountryContext = () => {
    return useContext(CountryContext)
};
