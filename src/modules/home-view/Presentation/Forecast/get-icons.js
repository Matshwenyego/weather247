import {images} from 'assets';

const {
    clear2x,
    rain2x,
    partlysunny2x,
} = images;

const getWeatherIcon = (main) => {
    switch (main) {
        case 'Clouds':
            return partlysunny2x;
        case 'Rain':
            return rain2x;
        case 'Clear':
            return clear2x;
        case 'Extreme':
            return rain2x;
        default:
            return clear2x;
    }
}

export {getWeatherIcon};