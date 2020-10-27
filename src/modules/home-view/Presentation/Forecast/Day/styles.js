import {StyleSheet} from 'react-native';
import {colors} from 'assets';

const {
  white,
} = colors;

const styles = StyleSheet.create({
    forecastContainer: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      marginTop: '3%'
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