import mongoose from "mongoose";
// const MONGO_DB_URI =
//   process.env.MONGO_REMOTE_URL || process.env.MONGO_LOCAL_URL;

export const connectToDB = async () => {
  try {
    console.log("Connecting to MongoDB ......");
    const DBConnection = await mongoose.connect(
      "mongodb+srv://squarepizzaet:InOdCCcKSYCN4KZ0@squarepizza.boiswjb.mongodb.net/",
      
    );

    console.log(`Database Connected : ${DBConnection.connection.host}`);
  } catch (error) {
    process.exit(1);
  }
};


export const JWT_SECRET = "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZ3d0RRWUpLb1pJaHZjTkFRRUJCUUFEU3dBd1NBSkJBTlFLQStSV2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQawovaWhBOXVxdjcvKzVZc0YzVFVEaHFHZXN1bGJhdFFGdkNPaHVmSlNJQmFWT3RjbVZrTWZoWmRrQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ"
