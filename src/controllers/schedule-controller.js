"use strict";
const { Types } = require("mongoose");
const { getDescriptionFromDate } = require("../adapters/date-adapter");
const { sendNotification } = require("../adapters/notifier-adapter");
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

const loadById = async (req, res) => {
  try {
    const data = await scheduleRepository.loadByParams({
      _id: Types.ObjectId(req.params.scheduleId),
    });
    res
      .status(200)
      .send({ data, message: "Agendamentos encontrados com sucesso!" });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

const loadByCurrentUser = async (req, res) => {
  try {
    const data = await scheduleRepository.loadByParams({
      $or: [
        { clientId: Types.ObjectId(req.userId) },
        { barberId: Types.ObjectId(req.userId) },
      ],
    });
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

const update = async (req, res) => {
  try {
    const { isAccepted } = req.body;

    if (isAccepted !== null) {
      const [schedule] = await scheduleRepository.loadByParams({
        _id: Types.ObjectId(req.params.scheduleId),
      });
      if (!schedule) return;
      const [client] = schedule.clientId;
      const [barber] = schedule.barberId;

      const scheduleDate = getDescriptionFromDate(schedule.date);
      const isAcceptedMessage = `Olá ${client.name}. Seu agendamento com ${barber.name} no dia ${scheduleDate} foi confirmado`;
      const isRefusedMessage = `Olá ${client.name}. Seu agendamento com ${barber.name} no dia ${scheduleDate} foi recusado`;
      // await sendNotification(
      //   isAccepted ? isAcceptedMessage : isRefusedMessage,
      //   "19998496013"
      //   // client.telephone
      // );
    }
    await scheduleRepository.updateByParams(
      { _id: Types.ObjectId(req.params.scheduleId) },
      req.body
    );
    res.status(201).send({ message: "Agendamento atualizado com sucesso!" });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};
module.exports = {
  load,
  loadById,
  loadByCurrentUser,
  create,
  remove,
  update,
};
