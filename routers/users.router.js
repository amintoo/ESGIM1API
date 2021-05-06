const express = require('express')
const userModel = require('../models/user.model')
const router = express.Router()

router.get('/', async (request, response) => {
    const users = await userModel.find({})
    response.status(200).send(users)
})

router.post('/', async(request,response) => {
    const user = new userModel(request.body)
    await user.save()
    if(user) response.status(200).send(user)
    else response.status(500).send('Error')
})

module.exports = router