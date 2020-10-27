import React from 'react';
import {ActivityIndicator} from 'react-native';

const withSpinner = Comp => ({ isLoading, children, ...props }) => {
  if (isLoading) {
    return <ActivityIndicator isLoading={isLoading} size='large' />
  } else {
    return (
      <Comp {...props}>
        {children}
      </Comp>
    )
  }
};

export default withSpinner;