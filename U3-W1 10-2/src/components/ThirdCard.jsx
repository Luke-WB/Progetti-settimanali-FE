import { Component } from "react";
import CardMovie from "./CardMovie";

class ThirdCard extends Component {
  state = {
    cover: [],
  };
  componentDidMount = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=fa8d42b&type=movie&s=lord+of+rings&plot=full");
      if (response.ok) {
        const data = await response.json();
        this.setState({ cover: data.Search });
        console.log(this.state.cover);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return this.state.cover.map((mov) => <CardMovie movie={mov} />);
  }
}

export default ThirdCard;
