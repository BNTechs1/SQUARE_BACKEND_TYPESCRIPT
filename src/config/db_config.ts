import { printConsole } from "../utils/development";
import mongoose from "mongoose";
const MONGO_DB_URI = process.env.MONGO_REMOTE_URL ||  process.env.MONGO_LOCAL_URL;

export const connectToDB = async () => {
  try {
    printConsole(
      { data: "Connecting to MongoDB ......" },
      { textColor: "yellow" }
    );
    const DBConnection = await mongoose.connect("mongodb+srv://square:Bnsquare101@square.n0h2qw9.mongodb.net/square", {
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    });

    printConsole(
      { data: `Database Connected : ${DBConnection.connection.host}` },
      {
        textColor: "green",
      }
    );
  } catch (error) {
    printConsole(error);

    process.exit(1);
  }
};

