"use strict";
const { jwtAdapter } = require("../adapters");
const { barberRepository, clientRepository } = require("../repositories");

const authMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.headers["access-token"];
    if (accessToken) {
      const { id } = await jwtAdapter.decrypt(accessToken);
      if (id) {
        let userType = "";
        let user = await barberRepository.loadByParams({ _id: id }).lean();
        if (!user) {
          userType = "CLIENT";
          user = await clientRepository.loadByParams({ _id: id }).lean();
        } else {
          userType = "BARBER";
        }
        if (user) {
          Object.assign(req, { user: { ...user, userType }, userId: user._id });
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
