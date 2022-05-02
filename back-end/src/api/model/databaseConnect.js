const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5000,
    user: "postgres",
    password: "1234",
    database: "mapa",
  },
});
module.exports = knex;
