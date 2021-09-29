const express = require("express");
const controller = require("./controller");
const todoRouter = express.Router();
const hourMiddleware = require("../../../middlewares/hourMiddleware");
const validator = require("../../../validators/todo");

todoRouter
  .get(
    "/", //hourMiddleware.verifyHour,
    controller.getTodos
  )
  .get("/:id", controller.getTodoById)
  .post("/", validator.validatePost, controller.createTodo)
  .put("/:id", validator.validatePut, controller.updateTodo)
  .patch("/:id", controller.patchTodo)
  .delete("/:id", controller.deleteTodo);
module.exports = todoRouter;
