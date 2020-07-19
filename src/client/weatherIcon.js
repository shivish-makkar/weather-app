import React, {useEffect, useState} from 'react';
import { Space} from 'antd';
import '../App.css';

function WeatherIcon(props) {
    const { weatherData } = props;
    const weatherId = weatherData.weather[0].id;
    const[weatherIcon, setWeatherIcon ] = useState(<div>Initial</div>);

    const weatherCodes = () => {
        if (weatherId >= 200 && weatherId < 300){
            setWeatherIcon(
                <div className="icon thunder-storm">
                    <div className="cloud"/>
                    <div className="lightning">
                        <div className="bolt"/>
                        <div className="bolt"/>
                    </div>
                </div>
            );
        } else if ( weatherId >= 300 && weatherId < 500) {
            setWeatherIcon(
                <div className="icon sun-shower">
                    <div className="cloud"/>
                    <div className="sun">
                        <div className="rays"/>
                    </div>
                    <div className="rain"/>
                </div>
            );
        } else if ( weatherId >= 500 && weatherId < 600) {
            setWeatherIcon(
                <div className="icon rainy">
                    <div className="cloud"/>
                    <div className="rain"/>
                </div>
            );
        } else if ( weatherId >= 600 && weatherId < 700) {
            setWeatherIcon(
                <div className="icon flurries">
                    <div className="cloud" />
                    <div className="snow">
                        <div className="flake"/>
                        <div className="flake"/>
                    </div>
                </div>
            );
        } else if ( weatherId >= 700 && weatherId < 800) {
            setWeatherIcon(
                <div className="icon cloudy">
                    <div className="cloud"/>
                    <div className="cloud"/>
                </div>
            );
        } else if ( weatherId === 800) {
            setWeatherIcon(
                <div className="icon sunny">
                    <div className="sun">
                        <div className="rays"/>
                    </div>
                </div>
            );
        } else if ( weatherId > 800) {
            setWeatherIcon(
                <div className="icon cloudy">
                    <div className="cloud"/>
                    <div className="cloud"/>
                </div>
            );
        } else {
            setWeatherIcon(<div>Error Occurred</div>);
        }
    }

    useEffect(weatherCodes, [weatherId]);

    return (
        <div>
            <Space direction="vertical">
                {weatherIcon}
                <h2 style={{textAlign: 'center', marginTop: '0px'}}>{weatherData.weather[0].main}</h2>
                <p>Icons Taken from <a href="https://codepen.io/joshbader/full/EjXgqr/" target="_blank">Josh Bader</a></p>
            </Space>
        </div>
    );
}

export default WeatherIcon;