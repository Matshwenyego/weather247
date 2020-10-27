import {images} from 'assets';

const {cloudy,rainy,sunny} = images;

const getWeatherIcon = (main) => {
    switch (main) {
        case 'Clouds':
            return cloudy;
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

export {getWeatherIcon};