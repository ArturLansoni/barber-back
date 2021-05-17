"use strict";
const { barberRepository } = require("../repositories");
const { bcryptAdapter, jwtAdapter } = require("../adapters");

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

    const hashedPassword = await bcryptAdapter.hash(password);
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({ error: "Parametros inválidos!" });
      return;
    }

    const barber = await barberRepository.loadByEmail(email);
    if (!barber) {
      res.status(400).send({ error: "Este email não foi encontrado!" });
      return;
    }

    const isValid = await bcryptAdapter.compare(password, barber.password);
    if (!isValid) {
      res.status(400).send({ error: "Senha incorreta!" });
      return;
    }

    const accessToken = await jwtAdapter.encrypt(barber._id);
    res.status(201).send({ data: { accessToken } });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
  add,
  login,
};
