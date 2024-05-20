import { WeatherCard } from "../components/WeatherCard";
import { Input } from "../components/Input";
import { Navbar } from "../components/Navbar";

export const WeatherContainer = () => {
    return (
        <>
            <Navbar />
            <Input />
            <WeatherCard />
        </>
    )
}