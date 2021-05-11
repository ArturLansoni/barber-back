"use strict";
const { offersRepository } = require("../repositories");

const load = async (req, res) => {
  try {
    const data = await offersRepository.load();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
};
