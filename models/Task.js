const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	description: { type: String, required: true },
	startingHour: { type: Number, required: true },
	endingHour: { type: Number, required: true },
});

module.exports = mongoose.model("Task", TaskSchema);
