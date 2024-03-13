import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

// if no cache set global mongoose to any
if (!cached) {
  cached = (global as any).mogoose = { conn: null, promise: null };
}

// export async connection function
export const connectToDB = async () => {
  // if cache.conn return cache.conn
  if (cached.conn) {
    return cached.conn;
  }

  // if no MONGO URL throw missing MONGO Error
  if (!MONGODB_URL) {
    throw Error("missing MONGO URL");
  }

  // create cache.conn and await cache promise with mongoose.connect
  // pass URL + options: dbName
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "copilot",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
