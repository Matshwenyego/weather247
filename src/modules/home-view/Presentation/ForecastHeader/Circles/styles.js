import {StyleSheet} from 'react-native';
import {colors} from 'assets';

const {
  white,
} = colors;

const styles = StyleSheet.create({
    container: {
        flex: 0.05, 
        flexDirection: 'row',
    },
    circle1: {
        flex: 0.1,
        borderTopLeftRadius: 50, 
        borderTopRightRadius: 50, 
        opacity: 0.4
    },
    circle8: {
        flex: 0.08,
        borderTopLeftRadius: 50, 
        borderTopRightRadius: 50, 
        opacity: 0.8
    },
    circle5: {
        flex: 0.05,
        borderTopLeftRadius: 50, 
        borderTopRightRadius: 50, 
        opacity: 0.6
    },
    circle9: {
        flex: 0.09,
        borderTopLeftRadius: 50, 
        borderTopRightRadius: 50, 
        opacity: 0.7
    },
});

export {styles};