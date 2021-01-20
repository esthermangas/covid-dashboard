import styles from './App.module.css';
import Graphic from './Views/graphics';
import ToolBar from './components/toolbar/toolBar';
import CountryInformation from './Views/countryInformation/countryInformation.view';
import {useCountryContext} from './context/useContextCountry';
import useCountryData from './utils/useCountryData';

const  App = () => {
    const {country} = useCountryContext();
    const {countryData, isLoading} = useCountryData(country);
    if (isLoading) {
        return (<div/>)
    }
  return (
          <div className={styles.root}>
              <ToolBar/>
              {(countryData.data === undefined || countryData.data === null) && (
                  <div className={styles.notDataRoot}>
                      <div className={styles.notData}>
                          <h2>There is no data for this country.</h2>
                      </div>
                  </div>
              )}
              {countryData.data && (
                  <div>
                      <div>
                          <CountryInformation countryData={countryData}/>
                      </div>
                      <div className={styles.graphic}>
                          <Graphic countryData={countryData}/>
                      </div>
                  </div>
              )}
          </div>
  );
};

export default App;
