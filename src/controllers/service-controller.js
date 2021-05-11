"use strict";
const { serviceRepository,offersRepository } = require("../repositories");

const load = async (req, res) => {
  try {
    const data = await serviceRepository.load();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

const add = async (req, res) => {
  try {
    const { barberId, price, description, image, estimatedTime } = req.body;
    if (!barberId || !price || !description || !image || !estimatedTime) {
      res.status(400).send({ error: "Parametros inválidos!" });
      return;
    }

    const data = await serviceRepository.add({
      price,
      description,
      image,
      estimatedTime,
    });

    await offersRepository.add({ barberId, serviceId: data._id });

    res.status(201).send({ data });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
  add,
};
