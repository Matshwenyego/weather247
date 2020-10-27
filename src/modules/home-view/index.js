import React, {useEffect, useState} from 'react';
import {
  View,
  PermissionsAndroid
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {withSpinner} from 'common';
import NetInfo from "@react-native-community/netinfo";
import Geolocation from '@react-native-community/geolocation';
import {
  Forecast,
  ForecastHeader
} from './Presentation';
import {styles} from './styles';

const api = 'REPLACE WITH KEY';

const ViewWithSpinner = withSpinner(View);

const HomeViewContainer = () => {
  const [tempRange, setTempRange] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [netState, setNetState] = useState(null);
  const [timeStamp, setTimestamp] = useState(null);
  const [coords, setCoords] = useState(null);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetState(state.isInternetReachable);
    });    
    return () => unsubscribe()
  }, [netState]);

  useEffect(() => {
    if (netState) {
      getCurrentData();
      getForecastData();
    } else {
      getLocalData();
    }
  }, []);

  const getLocation = async () => {
    setLoader(true);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access',
          message: 'Weather247 requires access to your Location',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition((info) => {
                  setCoords(info.coords);
                  setLoader(false);
              },
              (error) => {
                  alert(error.message);
                  setLoader(false);
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
      } else {
          alert(`Error: `, 'In order to use and enjoy Weather247, Enable location in settings');
          setLoader(false);
      }
    } catch (error) {
      alert(error.message);
      setLoader(false);
  }
}

  const getCurrentData = async () => {
    setLoader(true);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${api}&units=metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      setTempRange(data.main);
      await AsyncStorage.setItem('tempRange', JSON.stringify(data.main));
      setWeather(data.weather[0]);
      await AsyncStorage.setItem('weather', JSON.stringify(data.weather[0]));
      setLoader(false);
    } catch (error) {
      alert(error.message);
      setLoader(false);
    }
  }

  const getForecastData = async () => {
    setLoader(true);
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&exclude=hourly,alerts,current,minutely,&appid=${api}&units=metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const forecast = [];

      for (const item of data.list) {
        if (item.dt_txt.split(' ')[1] === '00:00:00'){
          forecast.push({item});
        }
      }

      setWeeklyForecast(forecast);
      await AsyncStorage.setItem('weeklyForecast', JSON.stringify(forecast));
      await AsyncStorage.setItem('timestamp', JSON.stringify(new Date()));
      setLoader(false);
    } catch (error) {
      alert(error.message);
      setLoader(false);
    }
  }

  const getLocalData = async () => {
    setLoader(true);
    const localWeeklyForecast = await AsyncStorage.getItem('weeklyForecast');
    const localTempRange = await AsyncStorage.getItem('tempRange');
    const localWeather = await AsyncStorage.getItem('weather');
    const localTimestamp = await AsyncStorage.getItem('timestamp');

    setWeeklyForecast(JSON.parse(localWeeklyForecast));
    setTempRange(JSON.parse(localTempRange));
    setWeather(JSON.parse(localWeather));
    setTimestamp(JSON.parse(localTimestamp));
    setLoader(false);
  }


  return (
    <ViewWithSpinner isLoading={isLoader} style={styles.container}>
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
