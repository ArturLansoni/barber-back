"use strict";
const { serviceRepository, offersRepository } = require("../repositories");

const load = async (_, res) => {
  try {
    const data = await serviceRepository.loadAll();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const add = async (req, res) => {
  try {
    const { barberId } = req;
    const { price, description, image, estimatedTime } = req.body;
    if (!barberId || !price || !description || !image || !estimatedTime) {
      res.status(400).send({ message: "Parametros inválidos!" });
      return;
    }

    const data = await serviceRepository.create({
      price,
      description,
      image,
      estimatedTime,
    });

    await offersRepository.create({ barberId, serviceId: data._id });

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
