import React from 'react';
import {
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {getWeatherIcon} from './get-icons';
import Circles from './Circles';
import {styles} from './styles';


const ForecastHeader = ({tempRange, weather, timeStamp, netState}) => {
  const {temp_max} = tempRange;
  const {main} = weather;
  return (
    <ImageBackground source={getWeatherIcon(main)} style={styles.header}>
      {netState?null:(
        <View style={styles.headerTop}>
          <Text style={styles.headerText}>Your are currently offline</Text>
          <Text style={styles.headerText}>last updated: {timeStamp.split('T')[0]}</Text>
        </View>
      )}
      <View style={[styles.headerCenter, {flex:netState?0.5:0.4}]}>
        <Text style={styles.celsius}>{parseInt(temp_max)}&#xb0;</Text>
      </View>
      <View style={[styles.headerBottom, {flex:netState?0.5:0.4}]}>
        <Text style={styles.type}>{main}</Text>
      </View>
      <Circles main={main} />
    </ImageBackground>
  );
};

export default ForecastHeader;
