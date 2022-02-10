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
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(404).json({ msg: "Todo not found" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route  DELETE api/todos
// @desc   delete a todo
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    const todo = Todo.findById(req.params.id);
    if (!todo) {
      res.status(404).json({ msg: "Todo not found" });
    }

    await Todo.findByIdAndRemove(req.params.id);
    res.status(200).json({ id: req.params.id });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
