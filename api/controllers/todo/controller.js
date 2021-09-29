const Todo = require("../../../models/todo");

const getTodos = async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).send(todos);
};

const getTodoById = async (req, res) => {
  const id = req.params.id;
  //const todo = todos.find((elem) => elem.id == id);
  const todo = await Todo.findOne({ _id: id });
  if (!todo) {
    return res.status(404).send({
      message: "todo not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched successfully",
    data: todo,
  });
};

const createTodo = async (req, res) => {
  //   const newTodo = {
  //     id: todos.length + 1,
  //     ...req.body,
  //   };
  //   todos.push(newTodo);
  const newTodo = new Todo({
    ...req.body,
  });
  await newTodo.save();
  res.status(201).send({
    message: "Todo created successfully",
    data: newTodo,
  });
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  //   const index = todos.findIndex((elem) => elem.id == id);
  //   if (index < 0) {
  //     return res.status(404).send({
  //       message: "User not found",
  //       data: {},
  //     });
  //   }
  //   todos[index] = {
  //     id: todos[index].id,
  //     ...req.body,
  //   };
  const todo = await Todo.findOne({ _id: id });
  if (!todo) {
    return res.status(404).send({
      message: "Todo not found",
      data: {},
    });
  }
  const updateTodo = await Todo.updateOne({ _id: id }, { ...req.body });
  res.status(200).send({
    message: "Todo updated successfully",
    data: updateTodo,
  });
};

const patchTodo = async (req, res) => {
  const action = req.query.action;
  const id = req.params.id;
  //const index = todos.findIndex((elem) => elem.id == id);
  //     if (index < 0) {
  //     return res.status(404).send({
  //       message: "User not found",
  //       data: {},
  //     });
  //   }
  const todo = await Todo.findOne({ _id: id });
  if (!todo) {
    return res.status(404).send({
      message: "Todo not found",
      data: {},
    });
  }
  let updatedTodo;
  switch (action) {
    case "done":
      updatedTodo = await Todo.updateOne({ _id: id }, { completed: true });
      break;
    case "undone":
      updatedTodo = await Todo.updateOne({ _id: id }, { completed: false });
      break;
    default:
      break;
  }
  res.status(200).send({
    message: "Todo patched successfully",
    data: {},
  });
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findOne({ _id: id });
  if (!todo) {
    return res.status(404).send({
      message: "Todo not found",
      data: {},
    });
  }
  const deletedTodo = await Todo.deleteOne({ _id: id });
  res.status(200).send({
    message: "Todo deleted successfully",
    data: deletedTodo,
  });
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  patchTodo,
  deleteTodo,
};
