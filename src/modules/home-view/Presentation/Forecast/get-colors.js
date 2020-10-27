import {colors} from 'assets';

const {
    sunny,
    cloud,
    rainy,
} = colors;

const getWeatherColor = (main) => {
    switch (main) {
        case 'Clouds':
            return cloud;
        case 'Rain':
            return rainy;
        case 'Clear':
            return sunny;
        case 'Extreme':
            return rainy;
        default:
            return sunny;
    }
}

export {getWeatherColor};