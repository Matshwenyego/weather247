import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {getWeatherIcon} from '../get-icons';
import {styles} from './styles';

const Day = ({day, icon, temp}) => {
    const formattedDay = new Date(day).getDay();
    const days = ['Sunday','Monday','Tuesay','Wednesday','Thursday', 'Friday', 'Satureday'];    
    return (
        <View style={styles.forecastContainer}>
            <View style={styles.dayOfTheWeekContainer}>
                <View style={styles.dayOfTheWeek}>
                    <Text style={styles.forecastBottomText}>
                        {days[formattedDay]}
                    </Text>
                </View>
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.icon}>
                    <Image source={getWeatherIcon(icon)} />
                </View>
            </View>
            <View style={styles.celsiusContainer}>
                <View style={styles.celsius}>
                    <Text style={styles.forecastBottomText}>{parseInt(temp)}&#xb0;</Text>
                </View>
            </View>
        </View>
    );
};

export default Day;
