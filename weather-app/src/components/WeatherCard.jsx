// the card desugn for weather info
import { useState, useEffect } from 'react'
import axios from 'axios';
import { convertTimezoneToHHMM } from '../../Utils/index'
import { Spinner } from './Spinner';
import { useParams } from 'react-router-dom';
import { Error } from './Error';

export const WeatherCard = () => {
    const { city } = useParams();
    const [tempreture, setTempreture] = useState(null);
    const [icon, setIcon] = useState(null);
    const [wind, setWind] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [weatherCondition, setWeatherCondition] = useState(null);
    const [time, setTime] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cityName, setCityName] = useState(null);

    const apiToken = import.meta.env.VITE_WEATHER_API_KEY;
    console.log('apitoken:', apiToken);
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ apiToken }&units=metric`)
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
        setCityName(res.name);
        setHumidity(res.main.humidity);
        setTempreture(parseInt(res.main.temp));
        setIcon(`https://openweathermap.org/img/wn/${res?.weather[0].icon}@2x.png`);
        setWeatherCondition(res.weather[0].main);
        setWind(res.wind.speed);
        setTime(convertTimezoneToHHMM(res.timezone));
        console.log('cityName:', cityName);
    };
    if (loading) return (<Spinner />);
    if (error) return (<Error/>)
    return (
        <>
            <div className="row d-flex justify-content-center py-5">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card text-body" style={{ borderRadius: '35px' }}>
                        <div className="card-body p-4">

                            <div className="d-flex">
                                <h6 className="flex-grow-1">{cityName}</h6>
                                <h6>{time}</h6>
                            </div>

                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className="display-4 mb-0 font-weight-bold">{tempreture}°C</h6>
                                <span className="small" style={{ color: '#868B94' }}>{weatherCondition}</span>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                                    <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">{wind} km/h</span></div>
                                    <div><i className="fas fa-tint fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">{humidity}%</span></div>
                                </div>
                                <div>
                                    <img src={icon} width="100px" alt="Weather icon" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}