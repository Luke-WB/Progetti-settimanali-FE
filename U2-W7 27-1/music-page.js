const Url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const fetchQuery = async (query) => {
  const artista = await fetch(`${Url}${query}`);
  const { data: songs } = await artista.json();
  return songs;
};

const artistSongs = async () => {
  let canzoni = await fetchQuery("penatonix");
  let div = document.getElementById("artistPrefe");
  let canzoniPrefe = [canzoni[0], canzoni[2], canzoni[11], canzoni[19]];
  canzoniPrefe.forEach(({ album, title, rank, artist }) => {
    div.innerHTML += ` 
        <div class="card" style="width: 18rem;"  >
          <img src="${album.cover_xl}" class="img-fluid rounded-start card-img-top" alt="${title}">
          <div class="card-body">
          <h5 class="card-title" songRank='${rank}'>${title}</h5>
          <p class="card-text">${artist.name}</p>
          </div>
        </div>
        `;
  });
};

const song = async () => {
  let [primaCanzone] = await fetchQuery("avicii");
  /* console.log(primaCanzone); */
  const { album, title, artist, rank } = primaCanzone;
  let sezione = document.getElementById("songPrefe");
  sezione.innerHTML += `
  <div class="card">
    <div class="row ">
      <div class="col-md-4">
        <img src="${album.cover_xl}" class="img-fluid rounded-start" alt="${title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title" songRank='${rank}'>${title}</h5>
          <p class="card-text">${artist.name}</p>
        </div>
      </div>
    </div>
  </div>
  `;
};

const album = async () => {
  try {
    const arrayDiQueries = ["That's Christmas to Me", "True Avicii", "Ghost Stories Coldplay"];
    for (let i = 0; i < arrayDiQueries.length; i++) {
      const singolaQuery = arrayDiQueries[i];
      let [canzone] = await fetchQuery(singolaQuery);
      const sezione = document.querySelector(".carousel-inner");
      sezione.innerHTML += `
      <div class="carousel-item ${i == 0 ? "active" : ""}">
        <img src="${canzone.album.cover_xl}" class="d-block w-100" alt="...">
      </div>
      `;
    }
  } catch (error) {
    console.error(error);
  }
};

const arrayTitoli = () => {
  let h5 = document.querySelectorAll("h5");
  let titoli = [];
  h5.forEach((singoloTitolo) => {
    titoli.push({
      titolo: singoloTitolo.innerText,
      rank: Number(singoloTitolo.getAttribute("songRank")),
    });
  });
  return titoli;
};

const titoliAlfabetici = () => {
  let titoli = arrayTitoli();
  let sorted = titoli.map((canzone) => canzone.titolo).sort();
  console.log(sorted);
  let alert = document.querySelector(".modal ul.canzoniOrdinate");
  alert.innerHTML = "";
  sorted.forEach((canzone) => {
    alert.innerHTML += `
    <li class='list-group-item'>
      ${canzone}
    </li>
    `;
  });
};

const soloTitolo = () => {
  let titoli = arrayTitoli();
  let sorted = titoli.sort((a, b) => {
    return b.rank - a.rank;
  });
  let alert = document.querySelector(".alert ul.canzoniOrdinate");
  alert.innerHTML = "";
  sorted.forEach((canzone) => {
    alert.innerHTML += `
    <li class='list-group-item'>
        ${canzone.titolo} - ${canzone.rank}  
    </li>
    `;
  });
  alert.parentElement.classList.toggle("d-none");
};

window.onload = async () => {
  await artistSongs();
  await song();
  await album();
  await titoliAlfabetici();
};
