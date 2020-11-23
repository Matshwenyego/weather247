import AsyncStorage from '@react-native-async-storage/async-storage';

// const api = 'REPLACE-WITH-KEY';
const api = 'fdb7f0591869b4b9186051caf29d7c6d';

const getForecastData = async (
    setLoader,
    coords,
    setWeeklyForecast,
) => {
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

export {getForecastData};