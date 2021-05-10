"use strict";
const { barberRepository } = require("../repositories");

const load = async (req, res) => {
  try {
    const data = await barberRepository.load();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

const add = async (req, res) => {
  try {
    const { name, telephone, email, image, address } = req.body;
    if (!name || !telephone || !email || !image || !address) {
      res.status(400).send({ error: "Parametros inválidos!" });
      return;
    }

    const data = await barberRepository.add({
      name,
      telephone,
      email,
      image,
      address,
    });

    res.status(201).send({ data });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
  add,
};
