const dotenv = require('dotenv');

const mongoose = require('mongoose');
const connDb = async ()=>{
    try {
        const uri = "mongodb://localhost:27017"
        const conn = await mongoose.connect(uri);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connDb;



