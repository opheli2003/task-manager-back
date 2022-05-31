const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

const userModel = model("users", UserSchema);

module.exports = userModel;
