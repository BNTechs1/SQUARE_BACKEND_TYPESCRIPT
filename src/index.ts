import app from './app';

const port = process.env.PORT || 4000;
// Import DB Config
import { connectToDB } from "./config/db_config";

connectToDB();
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});


