const { response } = require("express");
const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/movie").get(function (req, res) {
  let db_connect = dbo.getDb("movieHub");
  db_connect
    .collection("movie")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/movie/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("movie").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/movie/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    moviename: req.body.moviename,
    ticketprice:req.body.ticketprice,
    threater:req.body.threater,
    genress:req.body.genress,
    showtime:req.body.showtime,
    description:req.body.description,
    cast:req.body.cast,
    banner:req.body.banner,
  };
  db_connect.collection("movie").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//This section will help you update a record by id.
recordRoutes.route("/movie/update/:id").post(function (req, response) {
  // response.json(req.params.id);
  let db_connect = dbo.getDb();

  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      moviename: req.body.moviename,
      ticketprice:req.body.ticketprice,
      threater:req.body.threater,
      genress:req.body.genress,
      showtime:req.body.showtime,
      description:req.body.description,
      cast:req.body.cast,
      banner:req.body.banner,
    },
  };
  db_connect.collection("movie").updateOne(myquery, newvalues);
  response.sendStatus(200);
});

// const router = require("express").Router();
// let movie = require("../routes/movie.js");
// router.route("/").get((req, res) => {
//   movie.find()
//     .then((movies) => res.json(movies))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
// router.route("/update/:id").post((req, res) => {
//   const moviename = req.body.moviename;
//   const ticketprice = req.body.ticketprice;
//   const genress = req.body.genress;
//   const showtime = req.body.showtime;
//   const description= req.body.description;
//   const  cast = req.body. cast;
//   const  banner = req.body. banner;

//   const newMovie = new Movie({ moviename, ticketprice, genress, showtime, description, cast, banner });

//   newMovie
//     .save()
//     .then(() => res.json("Movie Updated!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("movie").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
