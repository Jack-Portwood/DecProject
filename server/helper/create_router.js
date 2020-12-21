const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createRouter = (data) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    data.find().toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.get("/:id", (req, res) => {
      const id = req.params.id
      data.findOne({_id: ObjectID(id)})
      .then((doc) => res.json(doc))
      .catch((err) => {
      console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  })

  router.post("/", (req,res) => {
      const newData = req.body;
      data
        .insertOne(newData)
        .then((result) => {
          res.json(result.ops[0]);
        })
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
  })

  router.delete("/:id", (req, res) => {
    const id = req.params.id
    data.deleteOne({_id: ObjectID(id)})
    .then((result => res.json(result)
    ))
    .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        })
  })

  router.put("/:id", (req, res) => {
      const id = req.params.id
      const updatedData = req.body
      data.findOneAndUpdate({_id: ObjectID(id)}, {$set: updatedData}, {returnOriginal: false})
      .then(result => {
          res.json(result.value)
      })
      .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        })
  })


  return router;
};

module.exports = createRouter;
