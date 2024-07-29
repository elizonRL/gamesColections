import mongoose from "mongoose";

const { Schema } = mongoose;

const gameShema = new Schema({
  name: String,
  description: String,
});

const gameModel = mongoose.model("Game", gameShema);

const createGame = async (name, description) => {
  const newGame = {
    name: name,
    description: description,
  };
  const game = new gameModel(newGame);
  await game.save();
};

const allGames = async () => {
  const game = await gameModel.find().exec();
  console.log("Game: ", await game);

  return game;
};

export { allGames, createGame };
