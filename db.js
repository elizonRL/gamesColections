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
  const kittySchema = new mongoose.Schema({
    name: String,
  });
  const Kitten = mongoose.model("Kitten", kittySchema);
  const silence = new Kitten({ name: "Silence" });
  console.log(silence.name);
  await silence.save();
};

export default connectDb;
