import React from 'react';
import styles from './select.module.css';
import Select from 'react-select';
import {countries} from '../../utils/countries';
import {useCountryContext} from '../../context/useContextCountry';

const SelectCountries = () => {
    const {country, setCountry} = useCountryContext();;
    const options = countries.map(obj => ({label:obj.name, value:obj['alpha-3']}));
    const handleChange = ({value}) => {
        setCountry(value);
    };
    return (
        <div className={styles.root}>
            <Select options={options} onChange={handleChange} value={options.filter(function(option) {
                return option.value === country;
            })}/>
        </div>
    );
};

export default SelectCountries;


