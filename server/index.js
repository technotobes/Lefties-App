const express = require("express")
const app = express()
require("dotenv").config()
const strip = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors())

