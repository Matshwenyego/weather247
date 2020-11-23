import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const getLocation = async (
    setLoader,
    setCoords
) => {
    setLoader(true);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access',
          message: 'Weather247 requires access to your Location',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition((info) => {
                  setCoords(info.coords);
                  setLoader(false);
              },
              (error) => {
                  alert(error.message);
                  setLoader(false);
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
      } else {
          alert(`Error: `, 'In order to use and enjoy Weather247, Enable location in settings');
          setLoader(false);
      }
    } catch (error) {
      alert(error.message);
      setLoader(false);
  }
}

export {getLocation};