import React from 'react';
import styles from './graphics.module.css';
import groupDataByMonth from '../../utils/groupDataByMonth';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graphic = (props) => {
    const {countryData} = props;
    const monthsData = groupDataByMonth(countryData.data);
    return (
        <div className={styles.root}>
            <div>
                <h3>New Cases and new deaths by month in {countryData.location}, {countryData.continent}</h3>
            </div>
            <div>
                <LineChart width={500} height={300} data={monthsData} margin={{ top: 15, right: 40, left: 30, bottom: 15 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis  />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="new_cases" stroke="#8884d8" />
                    <Line type="monotone" dataKey="new_deaths" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};


export default Graphic;
