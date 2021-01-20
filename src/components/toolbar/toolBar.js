import React from 'react'
import styles from './toolBar.module.css';
import covid from '../../covid.png';
import SelectCountries from '../select/select.view';

const ToolBar = () => {
    return (
        <div className={styles.toolBar}>
            <div className={styles.icon}>
                <div className={styles.text}>
                    <div>COVID</div>
                    <div className={styles.subText}>Stas</div>
                </div>
                <img src={covid}/>
            </div>
            <div className={styles.select}>
                <SelectCountries/>
            </div>
        </div>
    );
};

export default ToolBar;
