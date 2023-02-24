import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./weekWeather.css";

const WeekWeather = (props) => {
  const [dati, setDati] = useState([]);

  const weekWeatherFetch = async () => {
    try {
      const response = await fetch(
        ` https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=e40db6ffb5aae3fa14856c109bf74b38&units=metric&cnt=8`
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
  }, [props.lat, props.lon]);
  return (
    <>
      <h3 className="mx-5">Ogni ora</h3>
      <div className="d-flex justify-content-between mx-5">
        {dati.map((info, i) => {
          return (
            <Card style={{ width: "10rem" }} key={i} className="text-center">
              <Card.Body>
                <Card.Text>Ore: {info.dt_txt.slice(11, 16)}</Card.Text>
                <Card.Text>{info.main?.temp}°C</Card.Text>
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
