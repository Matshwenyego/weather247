import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {WithSpinner} from 'common';
import NetInfo from "@react-native-community/netinfo";
import {
  Forecast,
  ForecastHeader
} from './Presentation';
import {
  getLocation,
  getCurrentData,
  getForecastData,
  getLocalData
} from './Functions';
import {styles} from './styles';

const ViewWithSpinner = WithSpinner(View);

const HomeViewContainer = () => {
  const [tempRange, setTempRange] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [netState, setNetState] = useState(null);
  const [timeStamp, setTimestamp] = useState(null);
  const [coords, setCoords] = useState(null);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    getLocation(setLoader,setCoords);
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetState(state.isInternetReachable);
    });    
    return () => unsubscribe()
  }, [netState]);

  useEffect(() => {
    if (netState) {
      getCurrentData(
        setLoader,
        coords,
        setTempRange,
        setWeather,
      );
      getForecastData(
        setLoader,
        coords,
        setWeeklyForecast,
      );
    } else {
      getLocalData(
        setLoader,
        setWeeklyForecast,
        setTempRange,
        setWeather,
        setTimestamp
      );
    }
  }, []);

  return (
    <ViewWithSpinner Loading={isLoader} style={styles.container}>
      {weather&&(
        <ForecastHeader 
          tempRange={tempRange} 
          weather={weather}
          timeStamp={timeStamp}
          netState={netState}
        />
      )}
      {weather&&(
        <Forecast 
          tempRange={tempRange} 
          weather={weather}
          weeklyForecast={weeklyForecast}
        />
      )}
    </ViewWithSpinner>
  );
};

export default HomeViewContainer;
