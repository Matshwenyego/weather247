import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native';
import {colors} from 'assets';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeViewContainer} from './src/modules';

const {cloud, sunny, rainy} = colors;

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#FFFFFF',
          itemStyle: { marginVertical: 30 },
        }}
        drawerStyle={{
          backgroundColor: cloud,
          width: 240,
        }}
      >
        <Drawer.Screen 
          name="Live Weather Update" 
          component={HomeViewContainer} 
          options={{ 
            headerShown: true,
            headerTitle: '', 
            headerStyle: {
              backgroundColor: cloud,
              height: 40,
            },
            headerTintColor: '#FFFFFF'
          }}
        />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
