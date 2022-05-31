const router = require("express").Router();
const Task = require("../models/Task");

//CREATE

router.post("/create", async (req, res) => {
	try {
		const newTask = new Task(req.body);
		const savedTask = await newTask.save();
		res.status(201).json(savedTask);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET ONE TASK

router.get("/:id", async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		res.status(200).json(task);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET ALL TASKS

router.get("/", async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(200).json(tasks);
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE

router.delete("/:id", async (req, res) => {
	try {
		await Task.findByIdAndDelete(req.params.id);
		res.status(200).json("Task deleted");
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
