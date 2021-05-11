"use strict";
const { offersRepository } = require("../repositories");

const loadByBarberId = async (req, res) => {
  try {
    const { barberId } = req.params;
    if (!barberId) {
      res.status(400).send({ error: "Parametros inválidos!" });
      return;
    }

    const data = await offersRepository.loadByBarberId(barberId);
    const services = data.map((item) => item.serviceId);

    res.status(200).send({ data: services });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  loadByBarberId,
};
