const url = "http://localhost:5500/saveCoordinates";

function saveCoordinates() {
  axios
    .post(url, {
      country: document.getElementById("country").textContent,
      state: document.getElementById("state").textContent,
      municipality: document.getElementById("municipality").textContent,
      city: document.getElementById("city").textContent,
      suburb: document.getElementById("suburb").textContent,
      road: document.getElementById("road").textContent,
      postcode: document.getElementById("postcode").textContent,
      region: document.getElementById("region").textContent,
    })
    .then((data) => {
      alert("Dados salvos com sucesso!");
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

//-19.926785, -43.9392158
//-25.4485115, -49.286169
//-19.9648664,-44.0375329
//-19.9188536,-44.0492873
//-19.9684602,-44.0422781
