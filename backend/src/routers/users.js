const express = require('express')
const user = require('../models/user')
const employee =require('../models/employee')
const graph =require('../models/graph')
// const comment=require('../models/comment')
// const data=require('../models/data')
// const auth = require('../middleware/auth')
const router = new express.Router()






// route to add user
router.post('/users/adduser', async (req, res) => {

 

    const user1 = new user(req.body)

    try {
        await user1.save()

        


        res.status(201).send({ user1 })
    } catch (e) {

        res.status(400).send(e)
    }

})







 



//route to get uesr detail by his email
router.post('/users/getdetail', async (req, res) => {

    try {
        const user1= await user.find({ cusname: req.body.cusname })
        

        res.send({ user1})
    } catch (e) {
        res.status(400).send()
    }
})




module.exports = router