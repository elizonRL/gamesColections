import express from "express";
import { allGames, createGame } from "../controllers/games.controllers.js";

const router = express.Router();


router
  .route("/")
  .get(async(req, res) => {
    res.status(200).json(await allGames());
  })
  .post(async(req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    await createGame(name, description)
    
    res.status(201).send('ok');
  });

export default router;
