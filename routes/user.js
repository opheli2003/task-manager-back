const User = require("../models/User");

const router = require("express").Router();

router.post("/create", async (req, res) => {
	try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
