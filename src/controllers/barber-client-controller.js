"use strict";
const { barberRepository, clientRepository } = require("../repositories");
const { bcryptAdapter, jwtAdapter } = require("../adapters");
const { unexpectedError } = require("./messages");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let userType = "";
    let user = await barberRepository.loadByParams({ email }, true).lean();
    if (!user) {
      userType = "CLIENT";
      user = await clientRepository.loadByParams({ email }).lean();
    } else {
      userType = "BARBER";
    }
    if (!user) {
      res.status(400).send({ message: emailNotFound });
    }

    const isValid = await bcryptAdapter.compare(password, user.password);
    if (!isValid) {
      res.status(400).send({ message: incorrectPassword });
      return;
    }

    const accessToken = await jwtAdapter.encrypt(user._id);
    delete user.password;
    res.status(200).send({ data: { ...user, accessToken, userType } });
  } catch (e) {
    res.status(500).send({ message: unexpectedError });
  }
};

const loadCurrentUser = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).send({ data: { user } });
  } catch (e) {
    res.status(500).send({ message: unexpectedError });
  }
};

module.exports = {
  login,
  loadCurrentUser,
};
