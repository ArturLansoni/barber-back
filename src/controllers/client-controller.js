"use strict";
const { clientRepository } = require("../repositories");

const load = async (req, res) => {
  try {
    const data = await clientRepository.load();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

const add = async (req, res) => {
  try {
    const { name, telephone, email, image} = req.body;
    if (!name || !telephone || !email || !image) {
      res.status(400).send({ error: "Parametros inválidos!" });
      return;
    }

    const userAlreadyExists = await clientRepository.loadByMail(email);
    if (userAlreadyExists) {
      res.status(400).send({ error: "Esse usuário já existe!"});
      return;
    } 

    const data = await clientRepository.add({
      name,
      telephone,
      email,
      image,
    });

    res.status(201).send({ data });
  } catch (e) {
    res.status(500).send({ error: "Ocorreu um erro inesperado!" });
  }
};

module.exports = {
  load,
  add,
};
