import { Card } from "react-bootstrap";

const CardWeather = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{props.info.name}</Card.Title>
        <Card.Text>
          <strong>TEMPERATURA ATTUALE:</strong>
          {props.info.main?.temp}°C
        </Card.Text>
        <Card.Text>
          {props.info.main?.temp_max}°C
          {props.info.main?.temp_min}°C
          {props.info.main?.humidity}%{props.info.weather && props.info.weather[0].main}
          {props.info.weather && props.info.weather[0].description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardWeather;
