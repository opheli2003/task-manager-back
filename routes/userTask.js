// const router = require("express").Router();
// const UserTask = require("../models/UserTask");

// //CREATE USER TASKS

// router.post("/createCart", async (req, res) => {
// 	if (req.body.quantity == 1)
// 		try {
// 			const newCart = new UserTask(req.body);
// 			const savedNewCart = await newCart.save();
// 			res.status(201).json(savedNewCart);
// 		} catch (err) {
// 			res.status(500).json(err);
// 		}
// });

// //GET USER TASKS

// router.get("/", async (req, res) => {
// 	try {
// 		const userTasks = await UserTask.find();
// 		res.status(201).json(userTasks);
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

// module.exports = router;
