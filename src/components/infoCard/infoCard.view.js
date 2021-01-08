import React from 'react';
import styles from './infoCard.module.css';

const InfoCard = (props) => {
    const {title, value, label, additionalInfo, additionalInfoLabel} = props;
    return(
        <div className={styles.root}>
            <div className={styles.title}>
                {title.toUpperCase()}
            </div>
            <div className={styles.contInfo}>
                <div className={styles.text}>
                    {value}
                </div>
                <div className={styles.textLabel}>
                    {label}
                </div>
            </div>
            <div className={styles.additionalInfo}>
                <div className={styles.textAdditionalInfo}>
                    {additionalInfo}
                </div>
                <div className={styles.textLabel}>
                    {additionalInfoLabel}
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
