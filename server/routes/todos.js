const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// @route  GET api/todos
// @desc   get all todo
// @access Public
router.get("/", async (req, res) => {
  try {
    // create a new todo
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route  POST api/todos
// @desc   create a todo
// @access Public
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  // const { todo, isComplete } = req.body;
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route  PUT api/todos
// @desc   update a todo
// @access Public
router.put("/:id", (req, res) => {
  res.status(200).json({ message: "update goals" });
});

// @route  DELETE api/todos
// @desc   delete a todo
// @access Public
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "delete goals" });
});

module.exports = router;
