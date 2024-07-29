import express from "express";

const router = express.Router();
const data = [];

router
  .route("/")
  .get((req, res) => {
    res.status(200).json(data);
  })
  .post((req, res) => {
    data.push(req.body);
    res.status(201).json(data);
  });

export default router;
