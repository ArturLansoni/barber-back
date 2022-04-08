"use strict";
const { barberRepository } = require("../repositories");
const { jwtAdapter } = require("../adapters");

const authMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.headers["access-token"];
    if (accessToken) {
      const { id } = await jwtAdapter.decrypt(accessToken);
      if (id) {
        const barber = await barberRepository.loadByParams({ _id: id });
        if (barber) {
          Object.assign(req, { barberId: barber._id });
          next();
          return;
        }
      }
    }
    res.status(403).send({ message: "Acesso negado!" });
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

module.exports = authMiddleware;
