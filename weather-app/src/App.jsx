import './App.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { WeatherCard } from './components/WeatherCard';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  return (
    <>
    <Navbar/>
     <WeatherCard/>
    </>
  )
}

export default App

//9ccdd6027205f23aea6a07d36c703336
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
