import express from "express";
import { createConnection } from "mysql2";
import { Sequelize, DataTypes, Model } from "sequelize";
import userRouter from "./routes/userRoutes.js";
import User from "./models/User.js";
import productRouter from "./routes/productRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new Sequelize("my_app", "sail", "password", {
  host: "localhost",
  dialect: "mysql",
});

// Test the connection
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// const con = createConnection({
//   host: "localhost",
//   user: "sail",
//   password: "password",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Database connected");
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
