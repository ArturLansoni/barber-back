"use strict";
const { offersRepository } = require("../repositories");

const loadByCurrentBarber = async (req, res) => {
  try {
    const data = await offersRepository.loadByParams({ _id: req.barberId });
    const services = data.map((item) => item.serviceId);

    res.status(200).send({ data: services });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const loadByBarberId = async (req, res) => {
  try {
    const data = await offersRepository.loadByParams({ _id: req.barberId });
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
