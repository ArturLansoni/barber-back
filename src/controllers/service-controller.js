"use strict";
const { Types } = require("mongoose");
const { serviceRepository, offersRepository } = require("../repositories");

const load = async (_req, res) => {
  try {
    const data = await serviceRepository.loadAll();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const create = async (req, res) => {
  try {
    const data = await serviceRepository.create(req.body);
    await offersRepository.create({
      barberId: req.userId,
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
    await offersRepository.removeByParams({
      serviceId: Types.ObjectId(serviceId),
    });

    res.status(201).send();
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!", e });
  }
};

const update = async (req, res) => {
  try {
    const { serviceId } = req.params;
    await serviceRepository.updateByParams(serviceId, req.body);
    res.status(200).send();
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
  create,
  remove,
  update,
};
