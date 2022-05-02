const knex = require("../model/databaseConnect");
//Registra as coordenadas encontradas no banco de dados
const RegisterCoordenates = async (req, res) => {
  const { country, state, municipality, city, suburb, road, postcode, region } =
    req.body;
  await knex("coordenadas")
    .insert({
      country,
      state,
      municipality,
      city,
      suburb,
      road,
      postcode,
      region,
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { RegisterCoordenates };
