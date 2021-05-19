"use strict";
const { clientRepository } = require("../repositories");

const load = async (req, res) => {
  try {
    const data = await clientRepository.load();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

const add = async (req, res) => {
  try {
    const { name, telephone, email, image, password } = req.body;
    if (!name || !telephone || !email || !image || !password) {
      res.status(400).send({ error: "Parametros inválidos!" });
      return;
    }

    const userAlreadyExists = await clientRepository.loadByEmail(email);
    if (userAlreadyExists) {
      res.status(400).send({ error: "Esse usuário já existe!" });
      return;
    }

    const hashedPassword = await bcryptAdapter.hash(password);
    const data = await clientRepository.add({
      name,
      telephone,
      email,
      image,
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

    const barber = await clientRepository.loadByEmail(email);
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
