import mongoose from "mongoose";

const connectDb = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/test")
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDb;
