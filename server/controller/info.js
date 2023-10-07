const con = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    let sql = `select * from login where email = '${req.body.email}'`;
    const [result] = await con.query(sql);
    if (result.length > 0) {
      return res.send("ALREADY EXIST");
    } else {
      let hash = await bcrypt.hash(req.body.password, 12);
      let sql = `insert into login (email, password) values ('${req.body.email}', '${hash}')`;
      const data = await con.query(sql);
      return res.send("insert successfully");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ msg: "Something went wrong", status: false });
  }
};

const login = async (req, res) => {
  try {
    let sql = `select * from login where email = '${req.body.email}'`;
    const [result] = await con.query(sql);
    console.log(result);

    if (result.length > 0) {
      let compare = await bcrypt.compare(req.body.password, result[0].password);
      console.log(compare);
      if (compare) {
        let token = jwt.sign(result[0], "shhhhh");
        console.log(token);
        return res.send({
          token, status: true,
          email: req.body.password,
          password: req.body.password,
          role: "Admin user",
          userId: 1
        })
      } else {
        return res.send({ msg: "wrong password", status: false });
      }
    } else {
      return res.send({ msg: "Not registered", status: false });
    }
  } catch (err) {
    return res.status(400).send({ msg: "Something went wrong", status: false });
  }
};

module.exports = {
  register,
  login,
};