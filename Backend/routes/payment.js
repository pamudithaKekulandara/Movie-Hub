const { response } = require('express')
const express = require('express')

const recordRoutes = express.Router()
//strip payment gateway
const pkey = process.env.STRIPE_KEY
const stripe = require('stripe')(pkey)
const uuid = require('uuid')

// This section will help you create a new record.
recordRoutes.route('/payment').post(function (req, res) {
  const { token, total } = req.body
  // console.log('Product', movie)
  console.log('Price', total)
  const idempontencyKey = uuid.v4()

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then(
      (customer) => {
        stripe.charges.create({
          amount: total * 100,
          currency: 'usd',
          customer: customer.id,
          receipt_email: token.email,
          description: `purchased`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        })
      },
      { idempontencyKey }
    )
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err))
})

module.exports = recordRoutes
