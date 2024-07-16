import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { config } from "dotenv";
import { connectToDB } from "./src/config/db_config";
import { corsOptions } from "./src/config/corsOption";
import * as middlewares from "./src/middlewares";
import api from "./src/api";
import MessageResponse from "./src/interfaces/MessageResponse";

// Initialize environment variables
config();

// Create an Express application
const app = express();

// Apply middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

// Define routes
app.get<MessageResponse>("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

// Apply custom middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// Connect to the database
connectToDB();

// Define the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

// Export the app for testing purposes
export default app;
