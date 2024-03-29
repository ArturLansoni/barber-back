"use strict";
const { clientRepository } = require("../repositories");
const { bcryptAdapter } = require("../adapters");

const load = async (_req, res) => {
  try {
    const data = await clientRepository.loadAll();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const add = async (req, res) => {
  try {
    const userAlreadyExists = await clientRepository.loadByParams({
      email: req.body.email,
    });
    if (userAlreadyExists) {
      res.status(400).send({ message: "Esse usuário já existe!" });
      return;
    }

    const hashedPassword = await bcryptAdapter.hash(req.body.password);
    const data = await clientRepository.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).send({ data });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const login = async (req, res) => {
  try {
    const client = await clientRepository.loadByParams({
      email: req.body.email,
    });
    if (!client) {
      res.status(400).send({ message: "Este email não foi encontrado!" });
      return;
    }

    const isValid = await bcryptAdapter.compare(
      req.body.password,
      client.password
    );
    if (!isValid) {
      res.status(400).send({ message: "Senha incorreta!" });
      return;
    }

    const accessToken = await jwtAdapter.encrypt(client._id);
    res.status(201).send({ data: { accessToken } });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
  add,
  login,
};
