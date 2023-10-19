const knex = require("../connection/connection");

const createTable = async (req, res) => {
  try {
    const { table_name, columns, data_type } = req.body;

    if (data_type.length !== columns.length) {
      return res.json({
        message: "data_types and columns must have the same length",
      });
    }

    const arrayColumnType = [];

    for (let data of data_type) {
      arrayColumnType.push([columns[data_type.indexOf(data)], data]);
    }

    console.log(arrayColumnType);

    await knex.schema
      .createTable(table_name, (t) => {
        for (let pair of arrayColumnType) {
          if (pair[1] === "serial_pkey") {
            t.increments(pair[0], { primaryKey: true });
          }
          if (pair[1] === "pkey") {
            t.primary(pair[0].split(" ", 1));
          }
          if (pair[1] === "text") {
            t.text(pair[0]);
          }
          if (pair[1] === "integer" || pair[1] === "int") {
            t.integer(pair[0]);
          }
        }
      })
      .debug();

    return res.status(201).json({ message: "Table created" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const insertIntoTable = async (req, res) => {
  const { columns, values } = req.body;
};

module.exports = {
  createTable,
  insertIntoTable,
};
