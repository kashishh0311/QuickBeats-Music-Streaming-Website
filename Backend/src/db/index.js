import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config({
  path: "./src/.env",
});

const Connection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.HOSTNAME,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: DB_NAME,
    });
    console.log(`Database connected Successfully to ${DB_NAME}`);
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export default Connection;
