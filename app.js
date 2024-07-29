import express from "express";
import router from "./src/routes/games.routes.js";
import connectDb from "./db.js";

connectDb();
const app = express();
app.use(express.json());

const port = 3000;

app.use( router);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
