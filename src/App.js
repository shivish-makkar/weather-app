import React, {useEffect, useState} from 'react';
import './App.css';
import { Space, Button} from 'antd';
import WeatherIcon from "./client/weatherIcon";
import WeatherText from "./client/weatherText";
import { Typography } from 'antd';
import CityInput from "./client/cityInput";

function App() {
    const [ latitude, setLatitude ] = useState(0);
    const [ longitude, setLongitude ] = useState(0);
    const [ weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4bd7f3965a24ff9ad9ebd6d42e0194dc';
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4bd7f3965a24ff9ad9ebd6d42e0194dc`;

    const storeLocationFail = (error) => {
        console.log("An error has occurred in getting the position!")
    };

    const storeLocation =  async (position) => {
        setLatitude( position.coords.latitude);
        setLongitude(position.coords.longitude);
    };

    useEffect( () => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(storeLocation, storeLocationFail);
        getWeatherData(initialUrl).then(result => {
            setWeatherData(result);
            setLoading(false);
        });
    }, [])

    const onclick = function(e) {
        e.preventDefault();
        setLoading(true);
        navigator.geolocation.getCurrentPosition(storeLocation, storeLocationFail);
        getWeatherData(url).then(result => {
             setWeatherData(result);
             setLoading(false);
        });
    };

    const getWeatherData = async (url) => {
        const response = await fetch(url);
        return await response.json();
    };

    const unloadedWeatherApp = <div>unloaded</div>;

    const loadedWeatherApp =
        <div>
            <h1> Weather App </h1>
            <Space direction="vertical">
                <WeatherText weatherData={weatherData} key={1}/>
                <Button type="primary" onClick={onclick} className="button">Search for weather where I live!</Button>
                <WeatherIcon weatherData={weatherData} />
            </Space>
        </div>
    ;

    if (loading === true){
        return (unloadedWeatherApp);
    } else {
        return (loadedWeatherApp);
    }

}

export default App;
