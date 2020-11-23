import AsyncStorage from '@react-native-async-storage/async-storage';

const getLocalData = async (
    setLoader,
    setWeeklyForecast,
    setTempRange,
    setWeather,
    setTimestamp
) => {
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

export {getLocalData};