const mongoose = require("mongoose");
const dontenv = require("dotenv");
dontenv.config();
const connectDB = async () => {
  const PASSWORD = process.env.PASSWORD;
  const DATABASE_NAME = process.env.DATABASE_NAME;
  console.log("Env variables: ", { PASSWORD, DATABASE_NAME });
  const CONNECTION_URL = `mongodb+srv://amalalmutairi:${PASSWORD}@cluster0.pyaik.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;
  const conn = await mongoose.connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`mongo connected: ${conn.connection.host}`);
};
module.exports = connectDB;
