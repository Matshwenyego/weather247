import {StyleSheet} from 'react-native';
import {colors} from 'assets';

const {
  white,
} = colors;

const styles = StyleSheet.create({
    header: {
      flex: 0.5,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    headerTop: {
      flex: 0.2, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    headerText: {
      color: '#FFFFFF', 
      fontWeight: '400', 
      fontSize: 16, 
      letterSpacing: 2
    },
    headerCenter: {
      flex: 0.5, 
      justifyContent: 'flex-end', 
      alignItems: 'center',
    },
    headerBottom: {
      flex: 0.5, 
      justifyContent: 'flex-start', 
      alignItems: 'center',
    },
    celsius: {
      color: white, 
      fontSize: 50, 
      fontWeight:'800', 
      letterSpacing: 2,
    },
    type: {
      color: white, 
      fontSize: 25, 
      fontWeight:'800', 
      letterSpacing: 2
    },
});

export {styles};