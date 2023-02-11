import { Component } from "react";
import Card from "react-bootstrap/Card";

class CardMovie extends Component {
  render() {
    return (
      <Card
        style={{ width: "18rem", backgroundImage: "cover", border: "1px solid aqua" }}
        className="cardina me-3 mb-3"
        key={this.props.movie.imdbID}
      >
        <Card.Img className="h-100" src={this.props.movie.Poster} />
      </Card>
    );
  }
}

export default CardMovie;
