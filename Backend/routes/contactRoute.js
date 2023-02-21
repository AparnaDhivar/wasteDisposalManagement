const express = require("express");
const {contactUser} = require('../controller/userController.js');
const router = express.Router()

// router.route('/contact').post(contactUser);
// router.post('/post', async (req, res) => {
    // const data = new Model({
    //     username: req.body.username,
    //     phoneno: req.body.phoneno,
    //     address: req.body.address,
    //     email: req.body.email,
    //     shopno:req.body.shopno,
    //     garbage:req.body.garbage,
    // })

    try {

        router.route('/contact').post(contactUser);
        // res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
// })

module.exports = router;