import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";
import {
  USER_TABLE,
  ALBUM_TABLE,
  SONG_TABLE,
  PLAYLIST_TABLE,
  PLAYLIST_SONG_TABLE,
  LIKES_TABLE,
  ARTIST_TABLE,
} from "../constants.js";

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
      });
      await dbConnection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
      await dbConnection.query(`USE ${DB_NAME}`);
      await dbConnection.query(USER_TABLE);
      await dbConnection.query(ARTIST_TABLE);
      await dbConnection.query(ALBUM_TABLE);
      await dbConnection.query(SONG_TABLE);
      await dbConnection.query(PLAYLIST_TABLE);
      await dbConnection.query(PLAYLIST_SONG_TABLE);
      await dbConnection.query(LIKES_TABLE);
      console.log(`Connected to the database ${DB_NAME} successfully`);
      console.log("verified/created table successfully");

      return Connection;
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

// Export both the connection function and the connection object
export default Connection;
export { dbConnection };
