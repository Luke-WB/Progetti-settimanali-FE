import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  const [music, setMusic] = useState([]);

  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

  const musicFetch = async () => {
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const { data } = await response.json();
        setMusic(data);
        console.log(music);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    musicFetch();
  }, []);

  return music.map((elem) => {
    return (
      <div class="col text-center" id={elem.id}>
        <a href="/album_page.html?id=${elem.album.id}">
          <img class="img-fluid" src={elem.album.cover_medium} alt="1" />
        </a>
        <p>
          <a href="/album_page.html?id=${elem.album.id}">
            Album: {elem.album.title.length < 16 ? `${elem.album.title}` : `${elem.album.title.substring(0, 16)}...`};
          </a>
          <a href="/artist_page.html?id=${elem.artist.id}">Artist: {elem.artist.name}</a>
        </p>
      </div>
    );
  });
};
export default Home;
