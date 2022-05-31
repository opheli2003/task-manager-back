const mongoose = require("mongoose");

const UserTaskSchema = new mongoose.Schema({
	userId: { type: String },

	tasks: [
		{
			taskId: {
				type: String,
			},
			quantity: {
				type: Number,
			},
		},
	],
});

module.exports = mongoose.model("userTask", UserTaskSchema);
