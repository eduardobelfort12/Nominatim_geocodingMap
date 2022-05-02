//Variável para exibir o mapa no HTML através da dom
const exibirMapa = document.getElementById("map");
//Variável para capturar os valores digitados no campo de pesquisa
const reqinput = document.getElementById("input");
//Lista gerada na dom com os resultados de quando realiza uma nova pesquisa
const resultlist = document.getElementById("result-list");
//Botão para confirmar a pesquisa
const button = document.getElementById("search");
//Variável de remarcação de local
const Markers = [];

//Renderiza o mapa na tela ! //Nativo do leaflet
const map = L.map(exibirMapa).setView([-15.149894, -50.247509], 5);
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=R7xD8gDUBplAfRpXBHPv",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

//Remove botões de controle de zoom do mapa
map.zoomControl.remove();

let popup = L.popup();
//Quando Clica na tela exibe um pop-up que mostra a longitude e a latitude de onde foi clicado no mapa
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Latitude e longitude deste local é " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);
//Este trecho busca meu elemento botão através do id e quando clicado, ele irá pegar os valores digitados no meu input e fazer a chamada na
// API Nominatim utilizando o fetch para realizar essa comunicação e assim gerando a resposta

document.getElementById("search").addEventListener("click", () => {
  const query = reqinput.value;
  fetch(
    "https://nominatim.openstreetmap.org/search?format=json&polygon&lat&lon=1&addressdetails=1&q=" +
      query
  )
    .then((response) => response.json())
    .then((functionResponse) => {
      resultado(functionResponse);
    });
});

function resultado(functionResponse) {
  //Este trecho de código for, ele cuida da parte de remover o marcador de local toda vez que a função resultado é acionada no caso uma nova pesquisa nova a ser requisitada!
  for (const marker of Markers) {
    map.removeLayer(marker);
  }

  //Este segundo for realiza a função de através da resposta na Api fetch ele irá está usando a função nativa do leaflet.js
  //que irá 'voar' até o local pesquisado no campo de busca e também gerando uma resposta em json no html dos nomes buscados e latitude e longitude
  //e também criando uma  nova marcação da nova pesquisa realizada!
  for (const result of functionResponse) {
    //MapFlyTo é uma função nativa do leaflet, ela realiza a movimentação do mapa até o local pesquisado com base na latitude e longitude
    map.flyTo(new L.LatLng(result.lat, result.lon), 17);
    let objectAddress = JSON.stringify(
      {
        //Objetos extraidos com base na resposta gera pela api Nominatim
        country: result.address.country,
        state: result.address.state,
        city: result.address.city,
        municipality: result.address.municipality,
        suburb: result.address.suburb,
        road: result.address.road,
        postcode: result.address.postcode,
        region: result.address.region,
      },
      undefined,
      13
    );
    let parse = JSON.parse(objectAddress);
    resultlist.innerHTML =
      "<tr>" +
      "<th >País" +
      "</th>" +
      "<td id='country'name='country' value='parse.country'>" +
      parse.country +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<th >Estado" +
      "</th>" +
      "<td id='state'name='state' value='parse.state'>" +
      parse.state +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<th>Cidade " +
      "</th>" +
      "<td id='city' name='city' value='parse.city'>" +
      parse.city +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<th >Município" +
      "</th>" +
      "<td id='municipality'name='municipality' value='parse.municipality'>" +
      parse.municipality +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<th>Bairro" +
      "</th>" +
      "<td id='suburb' name='suburb' value='parse.suburb'>" +
      parse.suburb +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<th>Logradouro " +
      "</th>" +
      "<td id='road' name='road' value='parse.road '>" +
      parse.road +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<th >Cep" +
      "</th>" +
      "<td id='postcode' name='postcode' value='parse.postcode '>" +
      parse.postcode +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<th >Região" +
      "</th>" +
      "<td id='region' name='region' value='parse.region '>" +
      parse.region +
      "</td>" +
      "</tr>";

    const newPosition = new L.LatLng(result.lat, result.lon);
    Markers.push(new L.marker(newPosition).addTo(map));
    resultlist.appendChild();
  }
}
