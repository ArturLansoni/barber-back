"use strict";
const { offersRepository } = require("../repositories");

const loadByCurrentBarber = async (req, res) => {
  try {
    const data = await offersRepository
      .loadByParams({
        barberId: req.userId,
      })
      .lean();
    const services = data
      .map((item) => ({ ...item.serviceId, offerId: item._id }))
      .filter((item) => !!item);

    res.status(200).send({ data: services });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const loadByBarberId = async (req, res) => {
  try {
    const data = await offersRepository
      .loadByParams({
        barberId: req.params.barberId,
      })
      .lean();
    const services = data.map((item) => ({
      ...item.serviceId,
      offerId: item._id,
      barberId: item.barberId,
    }));

    res.status(200).send({ data: services });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  loadByBarberId,
  loadByCurrentBarber,
};
