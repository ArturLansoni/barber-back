"use strict";
const { serviceRepository, offersRepository } = require("../repositories");

const load = async (_req, res) => {
  try {
    const data = await serviceRepository.loadAll();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const add = async (req, res) => {
  try {
    const data = await serviceRepository.create(req.body);

    await offersRepository.create({
      barberId: req.barberId,
      serviceId: data._id,
    });

    res.status(201).send({ data });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const remove = async (req, res) => {
  try {
    const { serviceId } = req.params;

    await serviceRepository.remove(serviceId);
    await offersRepository.removeByParams({ _id: serviceId });

    res.status(201).send();
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
  add,
  remove,
};
