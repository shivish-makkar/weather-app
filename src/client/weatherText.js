import React, {useState} from 'react';
import { Space, Button } from 'antd';
import '../App.css';

function WeatherText(props) {
    const { weatherData } = props;
    const [temperatureAdditiveText, setTemperatureAdditiveText] = useState('\u00B0' + 'C');
    let placeName = weatherData.name + ', ' + weatherData.sys.country;

    let weatherDescription = weatherData.weather[0].description;
    weatherDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

    const precision = (x) => {
        return Number.parseFloat(x).toPrecision(3);
    }

    const celsiusTemperature = precision(weatherData.main.temp - 273.15);
    const fahrenheitTemperature = precision(celsiusTemperature * 9.0/5.0 + 32);
    const [currentTemperature, setCurrentTemperature] = useState(celsiusTemperature);

    const celsiusFeelsTemperature = precision(weatherData.main.feels_like - 273.15);
    const fahrenheitFeelsTemperature = precision(celsiusFeelsTemperature * 9.0/5.0 + 32);
    const [feelsLikeTemperature, setFeelsLikeTemperature] = useState(celsiusFeelsTemperature);

    const toCelsius = (e) => {
        e.preventDefault();
        setCurrentTemperature(celsiusTemperature);
        setFeelsLikeTemperature(celsiusFeelsTemperature);
        setTemperatureAdditiveText('\u00B0' + 'C');
    }

    const toFahrenheit = (e) => {
        e.preventDefault();
        setCurrentTemperature(fahrenheitTemperature);
        setFeelsLikeTemperature(fahrenheitFeelsTemperature);
        setTemperatureAdditiveText('\u00B0' + 'F');
    }

    const text = (
            <div>
                <h2> Name: {placeName}</h2>
                <h2> Current Temperature: {currentTemperature} {temperatureAdditiveText}</h2>
                <h2> Feels like: {feelsLikeTemperature} {temperatureAdditiveText} </h2>
                <Space direction="horizontal">
                    <Button type="primary" onClick={toCelsius} > Celsius </Button>
                    <Button type="primary" onClick={toFahrenheit}> Fahrenheit </Button>
                </Space>
                <h2>How's it looking right now? --> {weatherDescription} </h2>
            </div>
    );
    return (
        <div>
            {text}
        </div>
    );
}

export default WeatherText;