const { Router } = require("express");
const {
  signupUser,
  loginUser,
  getAllUser,
  deleteUser,
} = require("../controllers/userController");
const userRouter = Router();

// login route

userRouter.route("/login").post(loginUser);

// signup route

userRouter.route("/signup").post(signupUser);
userRouter.route("/all").get(getAllUser);
userRouter.route("/all/:id").delete(deleteUser);

module.exports = userRouter;
