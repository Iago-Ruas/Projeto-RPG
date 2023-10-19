const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "115037403",
    database: "projeto_dungeons_and_dragons",
  },
});

module.exports = knex;
