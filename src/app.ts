// import { config } from "dotenv";
// import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import { corsOptions } from "./config/corsOption";
// import cors from "cors"
// import * as middlewares from "./middlewares";
// import api from "./api";
// import MessageResponse from "./interfaces/MessageResponse";

// config();

// const app = express();
// app.use(morgan("dev"));
// app.use(helmet());
// app.use(cors(corsOptions));

// app.use(express.json());

// app.get<MessageResponse>("/", (req, res) => {
//   res.json({
//     message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
//   });
// });

// app.use("/api/v1", api);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

// export default app;
