const knex = require("../connection/connection");

const getWeapons = async (req, res) => {
  try {
    const weapon = await knex("armas_simples");
    return res.json(weapon);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const getMeleeWeapons = async (req, res) => {
  try {
    const weapon = await knex("armas_simples").where({ tipo: "Corpo-a-Corpo" });
    return res.json(weapon);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const getRangedWeapons = async (req, res) => {
  try {
    const weapon = await knex("armas_simples").where({ tipo: "Distância" });
    return res.json(weapon);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getWeapons,
  getMeleeWeapons,
  getRangedWeapons,
};
