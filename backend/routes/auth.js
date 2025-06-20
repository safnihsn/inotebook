const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = "#Jagritiisagoodgirl";

//Route 1 : Create user using : POST "/api/auth/createuser"
router.post(
  "/createuser", // Route 1
  [
    body("name", "Enter a valid name !").isLength({ min: 3 }),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email !").isEmail(),
  ],
  async (req, res) => {
    // if there is an error return bad request and error
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }
    // check whether the user with this email exist or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists!" });
      }
      //hashing password
      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);
      // create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET); //create to check the individuality of a user

      return res.status(201).json(authToken);
    } catch (error) {
      // catch errors
      console.error(error.message);
      res.status(501).send("Internal server error!");
    }
    // .then(user=>res.json(user));
  }
);

// Route 2 : Authenticate user using : POST "/api/auth/login" No login required

router.post(
  "/login",
  [
    body("email", "Enter a valid email !").isEmail(),
    body("password", "Password cannot be blank!").exists(),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const payLoad = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(payLoad, JWT_SECRET);
      return res.status(201).json(authToken);
    } catch (error) {
      console.error(error.message);
      res.status(501).send("Internal server error!");
    }
  }
);

//Route 3 : Get user details using : POST "/api/auth/getuser" Login required
router.post(
  "/getuser",fetchuser,async (req, res) => {
    try {
      let userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(501).send("Internal server error!");
    }
  }
);
module.exports = router;
