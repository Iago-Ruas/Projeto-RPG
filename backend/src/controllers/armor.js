const knex = require("../connection/connection");

const getArmor = async (req, res) => {
  try {
    const armor = await knex("armaduras");

    return res.json(armor);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const getArmorWithDisadvantage = async (req, res) => {
  try {
    const armor = await knex("armaduras").whereNotNull("furtividade");
    return res.json(armor);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const getArmorWithoutDisadvantage = async (req, res) => {
  try {
    const armor = await knex("armaduras").whereNull("furtividade");
    return res.json(armor);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const getLightArmor = async (req, res) => {
  try {
    const armor = await knex("armaduras").where({ tipo: "Leve" });
    return res.json(armor);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const getMediumArmor = async (req, res) => {
  try {
    const armor = await knex("armaduras").where({ tipo: "Média" });
    return res.json(armor);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const getHeavyArmor = async (req, res) => {
  try {
    const armor = await knex("armaduras").where({ tipo: "Pesado" });
    return res.json(armor);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const getShield = async (req, res) => {
  try {
    const armor = await knex("armaduras").where({ tipo: "Escudo" });
    return res.json(armor);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = {
  getArmor,
  getArmorWithDisadvantage,
  getArmorWithoutDisadvantage,
  getLightArmor,
  getMediumArmor,
  getHeavyArmor,
  getShield,
};
