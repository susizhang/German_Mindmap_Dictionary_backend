const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" });
};

// login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const getResults = await User.find();
    res.status(200).json({ getResults });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const deletedUser = await User.deleteOne({ _id: Object(`${id}`) });
    deletedUser
      ? res.status(200).json({ msg: "Delete successfully" })
      : res.status(404).json({
          msg: "Delete failed",
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser, getAllUser, deleteUser };
