import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.underline.brightGreen.bold
    );
  } catch (error) {
    console.log(`Ran into an Error: ${error.message}`.bold.brightRed);
    process.exit(1);
  }
};

export default connectDB;
