import mongoose, { mongo } from "mongoose";

type ConnectionOnject = {
  isConnected?: number;
};

const connection: ConnectionOnject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected Successfully");
  } catch (error) {
    console.log("DB connection Failed", error);
    process.exit(1);
  }
}

export default dbConnect;