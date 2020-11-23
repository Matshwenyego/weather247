import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {styles} from './styles';

const WithSpinner = Comp => ({ isLoading, children, ...props }) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator isLoading={isLoading} size='large' />
      </View>
    )
  } else {
    return (
      <Comp {...props}>
        {children}
      </Comp>
    )
  }
};

export default WithSpinner;