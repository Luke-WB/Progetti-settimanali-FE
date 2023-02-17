import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const WeekWeather = () => {
  const [dati, setDati] = useState([]);

  const weekWeatherFetch = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=25.790654&lon=-80.1300455&appid=e40db6ffb5aae3fa14856c109bf74b38&units=metric&cnt=8"
      );
      if (response.ok) {
        const data = await response.json();
        setDati(data.list);
        console.log(dati);
      } else {
        console.log("ERROR while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    weekWeatherFetch();
  }, []);
  return (
    <>
      <h3>Giornaliero</h3>
      <div className="d-flex justify-content-center">
        {dati.map((info, i) => {
          return (
            <Card style={{ width: "18rem" }} key={i}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{info.name}</Card.Title>
                <Card.Text>
                  <strong>TEMPERATURA:</strong>
                  {info.main?.temp}°C
                </Card.Text>
                <p>MAX {info.main?.temp_max}°C</p>
                {info.main?.temp_min}°C
                {info.main?.humidity}%{info.weather && info.weather[0].main}
                {info.weather && info.weather[0].description}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default WeekWeather;
