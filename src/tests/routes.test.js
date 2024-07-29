import * as chaiModule from "chai";
import chaiHttp from "chai-http";

import app from "../../app.js";
const chai = chaiModule.use(chaiHttp);

describe("This is a suite of test about app of the top game", () => {
  it("Should be return 200", (done) => {
    chai.request
      .execute(app)
      .get("/")
      .end((err, res) => {
        chai.assert.equal(res.status, 200);
        done();
      });
  });

  it("Should be recibe a object ", (done) => {
    let game = { id: 1, name: "Unchater4" };
    chai.request
      .execute(app)
      .post("/")
      .set("content-type", "application/json")
      .send(game)
      .end((err, res) => {
        chai.assert.equal(res.status, 201);
        chai.assert.isArray(res.body);
        chai.assert.equal(res.body[0].name, game.name);
        done();
      });
  });
});
