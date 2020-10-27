import React from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import {getWeatherColor} from './get-colors';
import Day from './Day';
import {styles} from './styles';

const Forecast = ({tempRange, weather, weeklyForecast}) => {
    const {temp_max,temp_min,temp} = tempRange;
    const {main} = weather; 
  return (
    <View style={[styles.forecast, {backgroundColor: getWeatherColor(main)}]}>
        <View style={styles.forecastTop}>
            <View style={styles.minContainer}>
                <Text style={styles.forecastCelsius}>{parseInt(temp_min)}&#xb0;</Text>
                <Text style={styles.forecastLabel}>min</Text>
            </View>
            <View style={styles.currentContainer}>
                <Text style={styles.forecastCelsius}>{parseInt(temp)}&#xb0;</Text>
                <Text style={styles.forecastLabel}>current</Text>
            </View>
            <View style={styles.maxContainer}>
                <Text style={styles.forecastCelsius}>{parseInt(temp_max)}&#xb0;</Text>
                <Text style={styles.forecastLabel}>max</Text>
            </View>
        </View>
        <View style={styles.forecastBottom}>
            <FlatList
                data={weeklyForecast}
                renderItem={({item}) => (
                    <Day
                        day={item.item.dt*1000}
                        icon={item.item.weather[0].main}
                        temp={item.item.main.temp}
                    />
                )}
                keyExtractor={(item) => item.item.dt_txt}
            />
        </View>
    </View>
  );
};

export default Forecast;
