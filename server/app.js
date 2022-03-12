const express = require('express')
const cors = require('cors')
const app = express()
const models = require('./models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


app.use(cors())
app.use(express.json())

const SALT_ROUND = 10

app.get('/listings', (req, res) => {
    models.Listing.findAll()
    .then((listings) => {
        res.json(listings)
    })
})

app.post('/listings', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const quantity = req.body.quantity
    const size = req.body.size
    const pickup = req.body.pickup
    const delivery = req.body.delivery
    const userId = req.body.userId

    const listingAdded = models.Listing.build({
        title: title,
        description: description,
        price: price,
        quantity: quantity,
        size: size,
        pickup: pickup,
        delivery: delivery,
        user_id: userId
    })
    listingAdded.save().then(() => {
        res.json({success:true, message:"Listing Created"})
    })
})


app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    models.User.findOne({
        where: {
            username: username
        }
    }).then(user => {

        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if(result) {
                    // pw is matching
                    // generate JSON Web Token
                    // dont put sensitive data into the token
                    const token = jwt.sign({username: user.username}, process.env.JWTKEY)
                    const user_id = user.id
                    res.json({success:true, token:token, user_id: user_id})
                } else {
                    res.json({success:false, message:'Not Authenticated!'})
                }
            })

        } else {
            res.json({success:false, message:'Authentication Failed!'})
        }

    })
})

app.post('/register', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    let persistedUser = await models.User.findOne({
        where: {
            username:username
        }
    })

    if(persistedUser == null) {

        bcrypt.hash(password, SALT_ROUND, async (error, hash) => {
            if(error) {
                res.json({success:false, message:'Error creating user'})
            } else {
                let user = models.User.build({
                    username: username,
                    password:hash,
                    email: email
                })

                let savedUser = await user.save()
                if(savedUser != null) {
                    res.json({success: true, message: "Account Created"})
                } else {
                    res.json({success: false, message:"Username Already Exists!"})
                }
            }
        })

    } else {
        res.json({errorMessage:"Username Already Exists!"})
    }

})

app.listen(8080, () => {
    console.log('Server is running')
})