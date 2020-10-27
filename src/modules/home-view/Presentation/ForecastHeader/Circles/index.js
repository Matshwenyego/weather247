import React from 'react';
import {
  View,
} from 'react-native';
import {getWeatherColor} from '../get-colors';
import {styles} from './styles';


const Circles = ({main}) => {
  return (
    <View style={styles.container}>
    <View style={[styles.circle1,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle5,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle8,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle1,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle5,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle8,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle1,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle5,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle8,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle1,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle5,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle8,{backgroundColor: getWeatherColor(main)}]} />
    <View style={[styles.circle9,{backgroundColor: getWeatherColor(main)}]} />
  </View>
  );
};

export default Circles;
