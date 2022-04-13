"use strict";
const { scheduleRepository } = require("../repositories");

const load = async (_req, res) => {
  try {
    const data = await scheduleRepository.loadAll();
    res
      .status(200)
      .send({ data, message: "Agendamentos encontrados com sucesso!" });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const create = async (req, res) => {
  try {
    await scheduleRepository.create(req.body);
    res.status(201).send({ message: "Agendamento criado com sucesso!" });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const remove = async (req, res) => {
  try {
    const { scheduleId } = req.params;

    await scheduleRepository.removeByParams({ _id: scheduleId });

    res.status(201).send({ message: "Agendamento removido com sucesso!" });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
  create,
  remove,
};
