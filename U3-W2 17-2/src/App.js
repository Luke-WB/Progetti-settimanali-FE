import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import img from "./assets/Weather-PNG.png";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import NavCustom from "./components/nav/NavCustom";
import WeekWeather from "./components/weekWeather/WeekWeather";

function App() {
  return (
    <>
      <NavCustom />
      <CurrentWeather img={img} />
      <WeekWeather />
    </>
  );
}

export default App;
