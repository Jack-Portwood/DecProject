const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const MongoClient = require("mongodb").MongoClient;

const createRouter = require("./helper/create_router.js")

const app = express();
app.use(bodyParser.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("codeclan");
    const g17Collection = db.collection("g17");
    const g17Router = createRouter(g17Collection);
    app.use("/api/g17", g17Router)
  })
  .catch(console.error);

app.listen(4000, () => {
  console.log("listen on port 4000");
});


