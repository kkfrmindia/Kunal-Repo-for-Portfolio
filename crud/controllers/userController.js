const User = require("../models/userModel.js");
// the above "User" variable is not normal variable of javascript, its a
// database variable like (PORT,MONGO_URI) extracted from the userModel file Schema,
// basically its a model of User data, which will be saved in database by name users,
// Actually all data base variable which is declared here will be converted into plural & with lowercase
// like "User" --> "users", so in your kkapp3 database you will get a collection name users not User.
exports.home = (req, res) => {
  res.send("Hello World!");
};

exports.createUser = async (req, res) => {
  // extract info
  try {
    const { name, emai } = req.body;
    if (!name || !emai) {
      throw new Error("Name and email are required");
    }
    // const userExists = User.findOne({ email });
    // if (userExists) {
    //   throw new Error("User already exists");
    // }

    const user = await User.create({
      name,
      emai,
      //   above formating of key: value pair inside an object is correct
      // as per ES6, if inside an object key:value pair have same character, like here
      // name : name & email : email
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
