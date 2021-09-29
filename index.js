const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const userRouter = require("./api/controllers/user/router");
const todoRouter = require("./api/controllers/todo/router");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/firstbase", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", () => console.log("Database connected!!"));

app.use("/users", userRouter);
app.use("/todos", todoRouter);
app.use(morgan("tiny"));
app.use(helmet());
//*************************** users **************************/

//get post put patch delete : use API
//https://jsonplaceholder
//http://localhost:5000/users

//status :
//100 : informations
//200 : tout va bien
//300 : redirections
//400 : erreur coté client (front)
//400 : erreur coté serveur (back)

//End point
//CRUD API

app.listen(5000, () => {
  console.log("listening on http://localhost:5000");
});

//************************** todos ****************************/

// const todos = [
//   {
//     id: 1,
//     task: "Do something",
//     completed: false,
//   },
//   {
//     id: 2,
//     task: "Do something else",
//     completed: true,
//   },
// ];

// app.get("/todos", (req, res) => {
//   res.status(200).send({
//     message: "Fetched successfully ",
//     data: todos,
//   });
// });

// app.get("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const task = todos.find((elem) => elem.id == id);
//   if (!task) {
//     return res.status(404).send({
//       message: "Task not found",
//       data: {},
//     });
//   }
//   res.status(200).send({
//     message: "Fetched successfully",
//     data: task,
//   });
// });

// app.post("/todos", (req, res) => {
//   const newTask = {
//     id: todos.length + 1,
//     ...req.body,
//   };
//   todos.push(newTask);
//   res.status(201).send({
//     message: "Task created successfully",
//     data: newTask,
//   });
// });

// app.put("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const index = todos.findIndex((elem) => elem.id == id);
//   if (index < 0) {
//     return res.status(404).send({
//       message: "Task not found",
//       data: {},
//     });
//   }
//   todos[index] = {
//     id: todos[index].id,
//     ...req.body,
//   };
//   res.status(200).send({
//     message: "Updated successfully",
//     data: todos[index],
//   });
// });

// app.delete("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const index = todos.findIndex((elem) => elem.id == id);
//   if (index < 0) {
//     return res.status(404).send({
//       message: "Task not found",
//       data: {},
//     });
//   }
//   todos.splice(index, 1);
//   res.status(200).send({
//     message: "Deleted successfully",
//   });
// });

// app.patch("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const index = todos.findIndex((elem) => elem.id == id);
//   if (index < 0) {
//     return res.status(404).send({
//       message: "Task not found",
//       data: {},
//     });
//   }
//   todos[index] = {
//     ...todos[index],
//     completed: req.body.completed,
//   };
//   res.status(200).send({
//     message: "Patched successfully",
//     data: todos[index],
//   });
// });

//*********Else u can do with query *********/

// app.patch("/todos/:id", (req, res) => {
//   const action = req.query.action;
//   const id = req.params.id;
//   const index = todos.findIndex((elem) => elem.id == id);
//   if (index < 0) {
//     return res.status(404).send({
//       message: "Task not found",
//       data: {},
//     });
//   }
//   switch (action) {
//     case "done":
//       todos[index] = {
//         ...todos[index],
//         completed: true,
//       };
//       break;
//     case "undone":
//       todos[index] = {
//         ...todos[index],
//         completed: false,
//       };
//       break;
//     default:
//       break;
//   }
//   res.status(200).send({
//     message: "Todo patched successfully",
//     data: todos[index],
//   });
// });

// app.listen(5000, () => {
//   console.log("listening on http://localhost:5000");
// });
