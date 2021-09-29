const express = require("express");
const controller = require("./controller");
const userRouter = express.Router();
const hourMiddleware = require("../../../middlewares/hourMiddleware");
const validator = require("../../../validators/user");

userRouter
  .get(
    "/", //hourMiddleware.verifyHour,
    controller.getUsers
  )
  .get("/:id", controller.getUserById)
  .post("/", validator.validatePost, controller.createUser)
  .put("/:id", validator.validatePut, controller.updateUser)
  .delete("/:id", controller.deleteUser);
module.exports = userRouter;
