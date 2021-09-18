const express = require("express");
const controller = require("./controller");
const userRouter = express.Router();
const hourMiddleware = require("../../../middlewares/hourMiddleware");

userRouter
  .get("/", hourMiddleware.verifyHour, controller.getUsers)
  .get("/:id", controller.getUserById)
  .post("/", controller.createUser)
  .put("/:id", controller.updateUser);

module.exports = userRouter;
