const db = require("../db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  //CHECK UShk

  const q = "SELECT * FROM users WHERE username = ?";

  db.sql.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

exports.register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.sql.query(q, [req.body.emailR, req.body.usernameR], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.passwordR, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.usernameR, req.body.emailR, hash];

    db.sql.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

exports.logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
