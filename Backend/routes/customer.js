const express = require('express')

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router()

// This will help us connect to the database
const dbo = require('../db/conn')

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId

// This section will help you get a list of all the records.
recordRoutes.route('/customer').get(function (req, res) {
  let db_connect = dbo.getDb('movieHub')
  db_connect
    .collection('customer')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
})

// This section will help you get a single record by id
recordRoutes.route('/customer/:id').get(function (req, res) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  db_connect.collection('customer').findOne(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

// This section will help you create a new record.
recordRoutes.route('/customer/add').post(function (req, response) {
  let db_connect = dbo.getDb()
  let myobj = {
    name: req.body.name,
    phoneNo: req.body.phoneNo,
    email: req.body.email,
    password: req.body.password,
    cardNo: req.body.cardNo,
    cvc: req.body.cvc,
    eDate: req.body.eDate,
    eYear: req.body.eYear,
  }
  db_connect.collection('customer').insertOne(myobj, function (err, res) {
    if (err) throw err
    response.json(res)
  })
})

// This section will help you update a record by id.
recordRoutes.route('/update/:id').post(function (req, response) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  let newvalues = {
    $set: {
      name: req.body.name,
      phoneNo: req.body.phoneNo,
      email: req.body.email,
      password: req.body.password,
      cardNo: req.body.cardNo,
      cvc: req.body.cvc,
      eDate: req.body.eDate,
      eYear: req.body.eYear,
    },
  }

  // This section will help you delete a record
  recordRoutes.route('/:id').delete((req, response) => {
    let db_connect = dbo.getDb()
    let myquery = { _id: ObjectId(req.params.id) }
    db_connect.collection('records').deleteOne(myquery, function (err, obj) {
      if (err) throw err
      console.log('1 document deleted')
      response.json(obj)
    })
  })
})

recordRoutes.route('/customer/login').post((req, res) => {
  let db_connect = dbo.getDb()
  db_connect
    .collection('customer')
    .findOne({ email: req.body.email }, function (err, result) {
      if (err) throw err
      if (result.password === req.body.password) {
        res.json('granted')
      } else {
        res.json('denied')
      }
    })
})

recordRoutes.route('/admin/login').post((req, res) => {
  if (req.body.email == 'admin' && req.body.password == 'admin') {
    res.json('granted')
  } else {
    res.json('denied')
  }
})
module.exports = recordRoutes
