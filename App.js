import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native';
import {HomeViewContainer} from './src/modules';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <HomeViewContainer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
