const { response } = require('express')
const express = require('express')

const recordRoutes = express.Router()

// This will help us connect to the database
const dbo = require('../db/conn')

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId

recordRoutes.route('/payment').get(function (req, res) {
  let db_connect = dbo.getDb('movieHub')
  db_connect
    .collection('payment')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
})

// This section will help you get a single record by id
recordRoutes.route('/payment/:id').get(function (req, res) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  db_connect.collection('payment').findOne(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

// This section will help you create a new record.
recordRoutes.route('/payment/add').post(function (req, response) {
  let db_connect = dbo.getDb()
  let myobj = {
    movieid: req.body.moviename,
    customerid: req.body.customerid,
    noOfTickets: req.body.noOfTickets,
    total: req.body.total,
  }
  db_connect.collection('payment').insertOne(myobj, function (err, res) {
    if (err) throw err
    response.json(res)
  })
})

// This section will help you delete a record
recordRoutes.route('/:id').delete((req, response) => {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  db_connect.collection('payment').deleteOne(myquery, function (err, obj) {
    if (err) throw err
    console.log('1 document deleted')
    response.json(obj)
  })
})

module.exports = recordRoutes
