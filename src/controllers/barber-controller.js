"use strict";
const { barberRepository } = require("../repositories");
const { hash } = require("../adapters/bcrypt-adapter");

const load = async (_req, res) => {
  try {
    const data = await barberRepository.load();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

const add = async (req, res) => {
  try {
    const { name, telephone, email, image, address, password } = req.body;
    if (!name || !telephone || !email || !image || !address || !password) {
      res.status(400).send({ error: "Parametros inválidos!" });
      return;
    }

    const barberAlreadyExists = await barberRepository.loadByEmail(email);
    if (barberAlreadyExists) {
      res.status(400).send({ error: "Esse barbeiro já existe!" });
      return;
    }

    const hashedPassword = await hash(password);
    const data = await barberRepository.add({
      name,
      telephone,
      email,
      image,
      address,
      password: hashedPassword,
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
