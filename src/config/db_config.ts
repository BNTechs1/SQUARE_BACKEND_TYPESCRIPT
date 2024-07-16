import mongoose from "mongoose";
import { config } from "dotenv";

// Initialize environment variables
config();

const MONGO_DB_URI = process.env.MONGO_REMOTE_URL || process.env.MONGO_LOCAL_URL;

export const connectToDB = async () => {
  try {
    if (!MONGO_DB_URI) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    console.log("Connecting to MongoDB ......");
    const DBConnection = await mongoose.connect(MONGO_DB_URI);

    console.log(`Database Connected : ${DBConnection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export const JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret_key";
