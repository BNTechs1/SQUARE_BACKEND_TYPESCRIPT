import app from './src/app';

const port = process.env.PORT || 3000;
// Import DB Config
import { connectToDB } from "./src/config/db_config";

connectToDB();
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});


