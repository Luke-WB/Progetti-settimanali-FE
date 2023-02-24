import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  const [dati, setDati] = useState([]);

  const currentWeatherFetch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=e40db6ffb5aae3fa14856c109bf74b38&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setDati(data);
        console.log(dati);
      } else {
        console.log("ERROR while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    currentWeatherFetch();
  }, [props.lat, props.lon]);
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <Card style={{ width: "50rem" }} className="text-center">
          <Card.Body>
            <h1>{dati.name.toUpperCase()}</h1>
            <Card.Text>
              <div>
                <img src={`http://openweathermap.org/img/wn/${dati.weather?.icon}@2x.png`} alt="" />
                <h2>{dati.main?.temp}°C</h2>
              </div>
              <p>{dati.weather && dati.weather[0].description}</p>
              <div className="d-flex justify-content-between flex-wrap my-4">
                <p>Percepita: {dati.main?.feels_like}°C</p>
                <p>Pressione: {dati.main?.pressure} mb</p>
                <p>Umidità: {dati.main?.humidity}%</p>
                <p>Visibilità: {dati.visibility} km</p>
              </div>
              Vento: {dati.wind?.speed} km/h
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CurrentWeather;
