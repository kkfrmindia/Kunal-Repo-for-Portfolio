import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxLength: [50, "Name should be less than 50 character"],
  },
  email: {
    type: String,
    unique: true,
  },
  Username: {
    type: String,
    unique: true,
  },
  password: String,
  age: Number,
});

export default mongoose.model("User", userSchema);

// // "User" - a named (by me) model (data model) in database (like in aws) with defined Schema (by mongoose model)
// // which written here in javascript variable UserSchema will be stored in database with plural name in lower case as "users",
//  so never put User like Users or any thing in mogoose export plural word, also this is not normal export like java script
// variable, its a model or data schema export which can be used any where in the same format like User.
