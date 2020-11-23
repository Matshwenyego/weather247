import AsyncStorage from '@react-native-async-storage/async-storage';

const api = 'fdb7f0591869b4b9186051caf29d7c6d';

const getCurrentData = async (
    setLoader,
    coords,
    setTempRange,
    setWeather,
) => {
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

export {getCurrentData};