"use strict";
const { offersRepository } = require("../repositories");

const loadByCurrentBarber = async (req, res) => {
  try {
    const { barberId } = req;
    if (!barberId) {
      res.status(400).send({ message: "Parametros inválidos!" });
      return;
    }

    const data = await offersRepository.loadByParams({ _id: barberId });
    const services = data.map((item) => item.serviceId);

    res.status(200).send({ data: services });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const loadByBarberId = async (req, res) => {
  try {
    const { barberId } = req.params;
    if (!barberId) {
      res.status(400).send({ message: "Parametros inválidos!" });
      return;
    }

    const data = await offersRepository.loadByParams({ _id: barberId });
    const services = data.map((item) => item.serviceId);

    res.status(200).send({ data: services });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  loadByBarberId,
  loadByCurrentBarber,
};
