import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://Ramya_21:Ramya@21@cluster0.wqnkn.mongodb.net/fprt?retryWrites=true&w=majority", {
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
