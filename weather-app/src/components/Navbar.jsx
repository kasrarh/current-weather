// a navbar to welcome and show the name
import weatherLogo from '../assets/weather-logo.png'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light ">
                <a className="navbar-brand p-2 aligned" href="/">
                    <img src={weatherLogo} width="30" height="30" className="d-inline-block align-top m-1" alt="Home Logo"/>
                        Current Weather
                </a>
            </nav>
        </>
    );
}





