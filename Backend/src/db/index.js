import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config({
  path: "./src/.env",
});

// Create a variable to store the connection that can be accessed outside
let dbConnection = null;

const Connection = async () => {
  try {
    // Only create a new connection if one doesn't exist
    if (!dbConnection) {
      dbConnection = await mysql.createConnection({
        host: process.env.HOSTNAME,
        user: process.env.USER_NAME,
        password: process.env.PASSWORD,
        database: DB_NAME,
      });
      console.log(`Database connected Successfully to ${DB_NAME}`);
    }
    return dbConnection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

// Export both the connection function and the connection object
export default Connection;
export { dbConnection };
