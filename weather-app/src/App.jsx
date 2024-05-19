import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherContainer } from './Pages/WeatherContainer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './Pages/Home';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:city" element={<WeatherContainer/>} />
      </Routes>
    </Router>
  )
}

export default App

