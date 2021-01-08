import React from 'react';
import styles from './countryInformation.module.css';
import InfoCard from "../../components/infoCard/infoCard.view";

const CountryInformation = (props) => {
    const {countryData} = props;
    const positionData = countryData.data.length-1;
    const lastData = countryData.data[positionData];
    return (
        <div className={styles.root}>
            <div>
                <InfoCard
                    title="total cases"
                    value={lastData.total_cases}
                    label={"Currently infected patients"}
                    additionalInfo={countryData.population}
                    additionalInfoLabel="Population"
                />
            </div>
            <div>
                <InfoCard
                    title="total deaths"
                    value={lastData.total_deaths}
                    label={"Currently deaths people"}
                    additionalInfo={countryData.hospital_beds_per_thousand}
                    additionalInfoLabel="Hospital beds per thousand"
                />
            </div>
        </div>
    );
};

export default CountryInformation;
