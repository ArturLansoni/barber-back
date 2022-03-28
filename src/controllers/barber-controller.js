"use strict";
const { barberRepository } = require("../repositories");
const { bcryptAdapter, jwtAdapter } = require("../adapters");

const load = async (_req, res) => {
  try {
    const data = await barberRepository.loadAll();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const loadCurrentUser = async (req, res) => {
  try {
    const data = await barberRepository.loadByParams({ _id: req.barberId });
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const add = async (req, res) => {
  try {
    const barberAlreadyExists = await barberRepository.loadByParams({
      email: req.body.email,
    });
    if (barberAlreadyExists) {
      res.status(400).send({ message: "Esse barbeiro já existe!" });
      return;
    }

    const hashedPassword = await bcryptAdapter.hash(req.body.password);
    const data = await barberRepository.create({
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
    const barber = await barberRepository.loadByParams(
      {
        email: req.body.email,
      },
      true
    );
    if (!barber) {
      res.status(400).send({ message: "Este email não foi encontrado!" });
      return;
    }

    const isValid = await bcryptAdapter.compare(
      req.body.password,
      barber.password
    );
    if (!isValid) {
      res.status(400).send({ message: "Senha incorreta!" });
      return;
    }

    const accessToken = await jwtAdapter.encrypt(barber._id);
    res.status(200).send({ data: { ...barber, accessToken } });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
  loadCurrentUser,
  add,
  login,
};
