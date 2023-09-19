const {
  Schema,
  model
} = require("mongoose");

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PersonModel = model("Person", PersonSchema)

module.exports = PersonModel