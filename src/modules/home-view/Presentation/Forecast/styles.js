import {StyleSheet} from 'react-native';
import {colors} from 'assets';

const {
  white,
  sunny
} = colors;

const styles = StyleSheet.create({
    forecast: {
      backgroundColor: sunny, 
      flex: 0.5,
    },
    forecastTop: {
      borderBottomWidth: 1, 
      borderBottomColor: white, 
      flex: 0.2, 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    forecastBottom: {
      flex: 0.8, 
      justifyContent: 'center',
    },
    forecastContainer: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      marginTop: '3%'
    },
    minContainer: {
      flex: 0.3, 
      justifyContent: 'center', 
      paddingLeft: '4%'
    },
    currentContainer: {
      flex: 0.4, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    maxContainer: {
      flex: 0.3, 
      justifyContent: 'center', 
      alignItems: 'flex-end',
      paddingRight: '4%'
    },
    forecastCelsius: {
      color: white, 
      fontSize: 14, 
      fontWeight: 'bold', 
      letterSpacing: 1,
    },
    forecastLabel: {
      color: white, 
      fontSize: 14, 
      fontWeight: '400', 
      letterSpacing: 1,
    },
    dayOfTheWeekContainer: {
      flex: 0.33, 
      paddingLeft: '4%',
    },
    dayOfTheWeek: {
      justifyContent: 'center',
    },
    iconContainer: {
      flex: 0.33
    },
    icon: {
      justifyContent: 'center', 
      alignItems: 'center',
    },
    celsiusContainer: {
      flex: 0.33, 
      paddingRight: '4%',
    },
    celsius: {
      justifyContent: 'center', 
      alignItems: 'flex-end',
    },
    forecastBottomText: {
      color: white, 
      fontWeight: '400', 
      fontSize: 16, 
      letterSpacing: 2,
    },
});

export {styles};