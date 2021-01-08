import React, {useState, useEffect} from 'react';

const useCountryData = (countryCode) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        fetch(`http://localhost:3001/${countryCode}`, {
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then( res => {
            setData(res);
            setIsLoading(false);
        } );
    },[countryCode]);
    return {countryData: data, isLoading};
};

export default useCountryData;
