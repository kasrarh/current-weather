import { useState, useEffect } from 'react'
import axios from 'axios';
import { convertTimezoneToHHMM } from '../../Utils/index'
import { Spinner } from './Spinner';
import { useParams } from 'react-router-dom';
import { Error } from './Error';

export const WeatherCard = () => {
    const { city } = useParams();
    const [weatherData, setWeatherData] = useState({
        temperature: null,
        icon: null,
        wind: null,
        humidity: null,
        weatherCondition: null,
        time: null,
        cityName: null
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiToken = import.meta.env.VITE_WEATHER_API_KEY;
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiToken}&units=metric`)
            .then(response => {
                setWeather(response.data);
                setLoading(false);
                setError(false);
            })
            .catch(error => {
                console.error("Couldn't fetch data", error);
                setError(error);
                setLoading(false);
            });
    }, [city]);
    const setWeather = (res) => {
        setWeatherData({
            tempreture: parseInt(res.main.temp),
            icon: `https://openweathermap.org/img/wn/${res?.weather[0].icon}@2x.png`,
            wind: res.wind.speed,
            humidity: res.main.humidity,
            weatherCondition: res.weather[0].main,
            time: convertTimezoneToHHMM(res.timezone),
            cityName: res.name
        });
    };
    if (loading) return (<Spinner />);
    if (error) return (<Error />)
    return (
        <>
            <div className="row d-flex justify-content-center py-5 p-3">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card text-body" style={{ borderRadius: '35px' }}>
                        <div className="card-body p-4">

                            <div className="d-flex">
                                <h6 className="flex-grow-1">{weatherData.cityName}</h6>
                                <h6>{weatherData.time}</h6>
                            </div>

                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className="display-4 mb-0 font-weight-bold">{weatherData.tempreture}°C</h6>
                                <span className="small" style={{ color: '#868B94' }}>{weatherData.weatherCondition}</span>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                                    <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">{weatherData.wind} km/h</span></div>
                                    <div><i className="fas fa-tint fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">{weatherData.humidity}%</span></div>
                                </div>
                                <div>
                                    <img src={weatherData.icon} width="100px" alt="Weather icon" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}