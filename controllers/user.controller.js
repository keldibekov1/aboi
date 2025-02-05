import db from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function register(req, res) {
  try {
    let { phone, password, fullname, role } = req.body;
    let [user] = await db.query("select * from users where phone = ?", [phone]);

    if (user.length) {
      return res.status(409).send({ message: "you have an account" });
    }

    let hashed = bcrypt.hashSync(password, 10);
    let [data] = await db.query(
      "insert into users (fullname, phone, password, role) values (?, ?, ?, ?)",
      [fullname, phone, hashed, role]
    );

    let [newUser] = await db.query("select * from users where id = ?", [
      data.insertId,
    ]);
    res.status(201).send({ data: newUser[0] });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}


async function login(req, res) {
  try {
    let { phone, password } = req.body;
    let [user] = await db.query("select * from users where phone = ?", [phone]);

    if (!user.length) {
      return res.status(401).send({ message: "Not authorized" });
    }

    let correct = bcrypt.compareSync(password, user[0].password);
    if (!correct) {
      return res.status(400).send({ message: "Wrong password" });
    }

    let token = jwt.sign(
      {
        id: user[0].id,
        role: user[0].role,
      },
      `secretKey`
    );

    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export { register, login};
