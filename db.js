import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.Mongo_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`mongodb connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(`error: ${err.message}`);
    process.exit(1);
  }
};

export default ConnectDB;
