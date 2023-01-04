const { Router } = require("express");
const { signupUser, loginUser } = require("../controllers/userController");
const userRouter = Router();

// login route

userRouter.route("/login").post(loginUser);

// signup route

userRouter.route("/signup").post(signupUser);

module.exports = userRouter;
