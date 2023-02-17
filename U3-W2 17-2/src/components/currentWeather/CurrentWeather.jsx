import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const CurrentWeather = (props) => {
  const [dati, setDati] = useState([]);

  const currentWeatherFetch = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=25.790654&lon=-80.1300455&appid=e40db6ffb5aae3fa14856c109bf74b38&units=metric"
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
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{dati.name}</Card.Title>
            <Card.Text>
              <strong>TEMPERATURA ATTUALE:</strong>
              {dati.main?.temp}°C
              <p>{dati.weather && dati.weather[0].description}</p>
            </Card.Text>
            <strong>MAX</strong> {dati.main?.temp_max}°C
            <strong>MIN</strong> {dati.main?.temp_min}°C
            <strong>UMIDITA'</strong> {dati.main?.humidity}%{dati.weather && dati.weather[0].main}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CurrentWeather;
